import React, { ForwardedRef, forwardRef } from "react";
import { HTMLAttributes } from "react";

export interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
}

export const InputField = forwardRef(
  (
    { label, hasError = false, ...rest }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={`space-y-0.3`}>
        <label className={`capitalize text-1.4`}>{label}</label>
        <input
          ref={ref}
          className={`w-full rounded-[calc(0.4em/1.6)] mx-auto p-[calc(1em/1.6)] bg-gray-100 text-1.6 focus:outline-gray-900 focus:border-transparent ${
            hasError ? "focus:outline-red-500" : "focus:outline-gray-900"
          }`}
          {...rest}
        />
      </div>
    );
  },
);

InputField.displayName = "InputField";
