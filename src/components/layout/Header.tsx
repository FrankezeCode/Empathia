"use client"
import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, User, LogIn, HelpCircle, Calendar, PenSquare, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import  Button  from '../ui/button';
import { useAuthStore } from '@/stores/authStore';
// import Button from '../ui/Button';
// import { useAuthStore } from '../../stores/authStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
//   const location = useLocation();
//   const { user, signOut } = useAuthStore();
const user = useAuthStore((state) => state.user);
const signOut = useAuthStore((state) => state.signOut);

  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  const navLinks = [
    { name: 'Q&A', path: '/qa', icon: <HelpCircle size={18} /> },
    { name: 'Therapy', path: '/therapists', icon: <Calendar size={18} /> },
    { name: 'Prescriptions', path: '/prescriptions', icon: <Pill size={18} /> },
  ];
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Heart className="w-8 h-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-neutral-800">Empathia</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link href="/profile">
                  <div className="flex items-center space-x-2 text-neutral-700 hover:text-primary-500">
                    <User size={20} />
                    <span className="text-sm font-medium">
                      {user.display_name || 'Profile'}
                    </span>
                  </div>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="outline" size="sm" icon={<LogIn size={16} />}>
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 hover:text-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-neutral-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center text-sm font-medium py-2 ${
                    isActive(link.path)
                      ? 'text-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-neutral-100">
                {user ? (
                  <div className="space-y-3">
                    <Link
                      href="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-sm font-medium py-2 text-neutral-600 hover:text-primary-500"
                    >
                      <User size={18} className="mr-2" />
                      Profile
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      isFullWidth
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" isFullWidth>
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary" size="sm" isFullWidth>
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;