"use client";

import type { ChangeEventHandler } from "react";
import { FieldWrapper } from "./FieldWrapper";

type InputTextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function InputTextField({ label,placeholder, value = "", error, type = "text", onChange }: InputTextFieldProps) {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        className='input-styles'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}
