import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export default function Textarea({ label, name, ...props }: TextareaProps) {
  return (
    <label className="block mb-2">
      <span className="block text-slate-700 font-medium mb-1">{label}</span>
      <textarea
        name={name}
        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-400 bg-ivory text-slate-800 min-h-[120px]"
        {...props}
      />
    </label>
  );
}
