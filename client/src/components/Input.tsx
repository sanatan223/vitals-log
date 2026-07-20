import React from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  id?: string;
}

export const Input = ({ label, type, value, onChange, onFocus, onBlur, placeholder, error, id }: InputProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2 m-4">
      <label htmlFor={inputId}
        className="text-[10px] tracking-widest uppercase"
        style={{ color: "#2a6a28", fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
          w-full rounded-md border p-2 text-base transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-1
          ${error
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-300 focus:border-slate-400 focus:ring-blue-500"
          }
        `}
      />
      {error && (
        <p className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};