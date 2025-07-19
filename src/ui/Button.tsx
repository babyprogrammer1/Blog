import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'danger' | 'default';
  className?: string;
}

const variantClasses = {
  primary: 'bg-slate-800 text-ivory hover:bg-slate-700',
  danger: 'bg-red-600 text-ivory hover:bg-red-700',
  default: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
};

export default function Button({ text, variant = 'default', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
