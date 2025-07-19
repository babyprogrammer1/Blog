import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <label className="block mb-2">
      <span className="block text-slate-700 font-medium mb-1">{label}</span>
      <input
        name={name}
        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-400 bg-ivory text-slate-800"
        {...props}
      />
    </label>
  );
}
