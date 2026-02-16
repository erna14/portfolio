"use client";
import { useState, type ReactNode } from "react";

type FieldWrapperProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

export function FieldWrapper({ label, error, children }: FieldWrapperProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <label className="mb-1 block text-xs font-medium text-white/50">
        {label}
      </label>

      <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        {children}
      </div>


      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className={`input-glow transition-all duration-200 ${isFocused ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}
