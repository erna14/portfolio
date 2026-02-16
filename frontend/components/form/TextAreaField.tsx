"use client";

import type { ChangeEventHandler } from "react";
import { FieldWrapper } from "./FieldWrapper";

type TextAreaFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextAreaField({ label,placeholder, value = "", error, rows = 5, onChange }: TextAreaFieldProps) {
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        className='input-styles'
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}
