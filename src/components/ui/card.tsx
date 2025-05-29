"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hoverable' | 'bordered';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseStyles = 'bg-white rounded-xl overflow-hidden';
  
  const variantStyles = {
    default: 'shadow-soft',
    hoverable: 'shadow-soft hover:shadow-medium transition-all duration-300',
    bordered: 'border border-neutral-200',
  };
  
  const clickableProps = onClick ? {
    onClick,
    role: 'button',
    tabIndex: 0,
  } : {};
  
  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...clickableProps}
    >
      {children}
    </motion.div>
  );
};

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <div className="flex items-start justify-between p-5 border-b border-neutral-100">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children,
  className = '',
}) => {
  return <div className={`p-5 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`px-5 py-4 bg-neutral-50 border-t border-neutral-100 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
