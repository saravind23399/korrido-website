import React, { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'peach' | 'mint' | 'lavender' | 'blue';
}

export const Card: React.FC<CardProps> = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
