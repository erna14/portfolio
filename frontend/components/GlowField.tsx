"use client";

import { useState } from "react";
import type { ComponentProps } from "react";

export type GlowFieldProps = {
  label: string;
  placeholder?: string;
} & (
  | { as?: "input"; type?: string }
  | { as: "textarea"; rows?: number }
);

export default function GlowField(props: GlowFieldProps) {
  const { label, placeholder, as = "input" } = props;
  const [focused, setFocused] = useState(false);

  const type = "type" in props ? props.type ?? "text" : "text";
  const rows = "rows" in props ? props.rows ?? 5 : 5;

  const Component = as;

  const fieldProps = {
    placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    type,
    rows,
  };

  return (
    <div className="relative w-full">
      <label className="mb-1 block text-xs font-medium text-white/50">
        {label}
      </label>

      <Component 
        className='input-styles' 
        {...(fieldProps as ComponentProps<"input"> & ComponentProps<"textarea">)}
      />

      <div className="input-glow" style={{ opacity: focused ? 1 : 0 }} />
    </div>
  );
}
