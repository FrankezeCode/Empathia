import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  session: any | null;
  
  initialize: () => Promise<void>;
  signUp: (email: string, password: string, isAnonymous: boolean) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInAnonymously: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: true,
  error: null,
  session: null,
  
  initialize: async () => {
    try {
      set({ isLoading: true, error: null });
      
      // Get session data
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // Get user profile data
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (error) {
          throw error;
        }
        
        set({ 
          user: profile, 
          session, 
          isLoading: false 
        });
      } else {
        set({ 
          user: null, 
          session: null, 
          isLoading: false 
        });
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
      set({ 
        user: null, 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
  
  signUp: async (email, password, isAnonymous) => {
    try {
      set({ isLoading: true, error: null });
      
      // Create auth account
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      // Create user profile if account was created
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: data.user.id,
              email,
              is_anonymous: isAnonymous,
              is_therapist: false,
              is_verified: false,
            },
          ]);
        
        if (profileError) {
          throw profileError;
        }
      }
      
      set({ isLoading: false });
    } catch (error) {
      console.error('Error signing up:', error);
      set({ 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
  
  signIn: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      // Get user profile
      if (data.user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();
        
        if (profileError) {
          throw profileError;
        }
        
        set({ 
          user: profile, 
          session: data.session, 
          isLoading: false 
        });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      set({ 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
  
  signInAnonymously: async () => {
    try {
      set({ isLoading: true, error: null });
      
      // Generate a random "anonymous" email and password
      const randomId = Math.random().toString(36).substring(2, 15);
      const email = `anonymous-${randomId}@lovable.ai`;
      const password = Math.random().toString(36).substring(2, 15) + 
                       Math.random().toString(36).substring(2, 15);
      
      // Create the anonymous account
      await get().signUp(email, password, true);
      
      // Sign in with the created account
      await get().signIn(email, password);
    } catch (error) {
      console.error('Error signing in anonymously:', error);
      set({ 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
  
  signOut: async () => {
    try {
      set({ isLoading: true, error: null });
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      set({ 
        user: null, 
        session: null, 
        isLoading: false 
      });
    } catch (error) {
      console.error('Error signing out:', error);
      set({ 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
  
  updateProfile: async (updates) => {
    try {
      set({ isLoading: true, error: null });
      
      const { user } = get();
      
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
      
      if (error) {
        throw error;
      }
      
      set({ 
        user: { ...user, ...updates }, 
        isLoading: false 
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      set({ 
        error: (error as Error).message, 
        isLoading: false 
      });
    }
  },
}));