import React from 'react';
import { Heart, Mail, Phone, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <Heart className="w-6 h-6 text-primary-400" />
              <span className="ml-2 text-lg font-bold text-white">Empathia</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-400">
              Culturally sensitive, accessible, and anonymous mental health platform for everyone. 
              Your wellbeing is our priority.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/qa" className="hover:text-primary-400 transition-colors">
                  Q&A Community
                </Link>
              </li>
              <li>
                <Link href="/therapists" className="hover:text-primary-400 transition-colors">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link href="/prescriptions" className="hover:text-primary-400 transition-colors">
                  E-Pharmacy
                </Link>
              </li>
              <li>
                <Link href="/referrals" className="hover:text-primary-400 transition-colors">
                  Hospital Referrals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-neutral-400" />
                <a href="mailto:empathia.team@gmail.com" className="hover:text-primary-400 transition-colors">
                  support@Empathia
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-neutral-400" />
                <a href="tel:+2348109503737" className="hover:text-primary-400 transition-colors">
                  +234 (810) 950-3737
                </a>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-2 text-neutral-400" />
                <span>Global Support Available</span>
              </li>
              <li className="flex items-center">
                <Shield size={16} className="mr-2 text-neutral-400" />
                <span>GDPR & HIPAA Compliant</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Empathia. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary-400 transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;