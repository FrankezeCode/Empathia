export interface User {
    id: string;
    created_at: string;
    email?: string;
    display_name?: string;
    avatar_url?: string;
    is_anonymous: boolean;
    is_therapist: boolean;
    is_verified: boolean;
    wallet_address?: string;
    specialty?: string; // For therapists
    bio?: string; // For therapists
    hourly_rate?: number; // For therapists
  }
  
  export interface Question {
    id: string;
    created_at: string;
    title: string;
    content: string;
    user_id: string;
    is_anonymous: boolean;
    category: string;
    tags: string[];
    upvotes: number;
    answer_count: number;
    status: 'open' | 'answered' | 'closed';
  }
  
  export interface Answer {
    id: string;
    created_at: string;
    content: string;
    question_id: string;
    user_id: string;
    is_anonymous: boolean;
    is_accepted: boolean;
    upvotes: number;
    is_therapist_answer: boolean;
  }
  
  export interface TherapySession {
    id: string;
    created_at: string;
    therapist_id: string;
    client_id: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    scheduled_for: string;
    duration: number; // In minutes
    session_type: 'video' | 'audio' | 'chat';
    notes?: string;
    feedback_rating?: number;
    feedback_comment?: string;
  }
  
  export interface Prescription {
    id: string;
    created_at: string;
    therapist_id: string;
    client_id: string;
    medication: string;
    dosage: string;
    instructions: string;
    valid_until: string;
    status: 'active' | 'filled' | 'expired';
  }
  
  export interface HospitalReferral {
    id: string;
    created_at: string;
    therapist_id: string;
    client_id: string;
    hospital_name: string;
    department: string;
    reason: string;
    urgency: 'low' | 'medium' | 'high' | 'emergency';
    status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  }