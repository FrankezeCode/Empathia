"use client"
import React from 'react'
import Button from "@/components/ui/button";
import Card, { CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Calendar, Pill, Building, ShieldCheck, Users } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div>
         <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <motion.h1 
                  className="text-4xl sm:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Mental Wellness, <br />
                  <span className="text-accent-300">For Everyone</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg mb-8 text-white/90 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Lovable AI is a culturally sensitive, accessible, and anonymous mental health platform combining peer support, professional therapy, and integrated medical services.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* <Link href="/qa"> */}
                    <Button 
                      variant="accent" 
                      size="lg"
                      icon={<MessageSquare size={18} />}
                    >
                      Ask a Question
                    </Button>
                  {/* </Link> */}
                  {/* <Link href="/therapists"> */}
                    <Button 
                      variant="outline" 
                      size="lg"
                    >
                      Find a Therapist
                    </Button>
                  {/* </Link> */}
                </motion.div>
              </div>
              
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="People supporting each other" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Heart className="text-error-500 h-8 w-8" />
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">5,000+ Users</div>
                        <div className="text-xs text-neutral-500">Finding support</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">How We Support You</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Our comprehensive platform provides multiple ways to access mental health support, from community discussions to professional services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="hoverable" className="text-center">
                <CardContent>
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={28} className="text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                    Anonymous Q&A
                  </h3>
                  <p className="text-neutral-600">
                    Ask questions and receive answers from peers and professionals without revealing your identity.
                  </p>
                  <div className="mt-6">
                    <Link href="/qa">
                      <Button variant="outline" size="sm">
                        Explore Community
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="hoverable" className="text-center">
                <CardContent>
                  <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={28} className="text-secondary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                    Professional Therapy
                  </h3>
                  <p className="text-neutral-600">
                    Connect with verified therapists for personalized sessions through video, audio, or chat.
                  </p>
                  <div className="mt-6">
                    <Link href="/therapists">
                      <Button variant="outline" size="sm">
                        Find Therapists
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="hoverable" className="text-center">
                <CardContent>
                  <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill size={28} className="text-accent-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                    E-Pharmacy & Referrals
                  </h3>
                  <p className="text-neutral-600">
                    Easily get prescribed medications delivered and receive hospital referrals when needed.
                  </p>
                  <div className="mt-6">
                    <Link href="/prescriptions">
                      <Button variant="outline" size="sm">
                        View Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">How It Works</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Getting support through Lovable AI is simple, secure, and tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users size={28} className="text-primary-500" />,
                  title: "Create Your Account",
                  description: "Sign up anonymously or with your details - your privacy is always protected."
                },
                {
                  icon: <MessageSquare size={28} className="text-primary-500" />,
                  title: "Ask or Browse",
                  description: "Post questions anonymously or browse existing Q&As from the community."
                },
                {
                  icon: <Calendar size={28} className="text-primary-500" />,
                  title: "Book a Session",
                  description: "Find a suitable therapist and schedule a session at your convenience."
                },
                {
                  icon: <Building size={28} className="text-primary-500" />,
                  title: "Get Comprehensive Care",
                  description: "Receive prescriptions, order medications, or get hospital referrals if needed."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-16 left-full w-16 transform -translate-x-8">
                      <div className="border-t-2 border-dashed border-primary-300 h-0"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Trust and Security Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                    Your Privacy & Security is Our Priority
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    We've built Lovable AI with privacy and security at its core. All communications are encrypted, and you control how much you share.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: <ShieldCheck size={20} className="text-primary-500" />,
                        title: "End-to-End Encryption",
                        description: "All communications, especially therapy sessions, are fully encrypted."
                      },
                      {
                        icon: <ShieldCheck size={20} className="text-primary-500" />,
                        title: "Anonymous Participation",
                        description: "Ask questions and engage without revealing your identity."
                      },
                      {
                        icon: <ShieldCheck size={20} className="text-primary-500" />,
                        title: "Verified Professionals",
                        description: "All therapists undergo thorough verification and background checks."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-3 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-medium text-neutral-800">{item.title}</h4>
                          <p className="text-sm text-neutral-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Security and privacy" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-secondary-600 to-secondary-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands who are already finding support and improving their mental wellbeing with Lovable AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/signup">
                <Button 
                  variant="accent" 
                  size="lg"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link href="/qa">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Browse Community
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main