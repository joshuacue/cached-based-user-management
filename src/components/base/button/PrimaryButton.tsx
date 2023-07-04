import React, { HTMLAttributes } from "react";
import { Button } from "./Button";

export function PrimaryButton({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLButtonElement> & { type?: string }) {
  return (
    <Button
      className={`h-4 shadow-xl bg-white text-gray-900 ring-1 ring-gray-400 ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
