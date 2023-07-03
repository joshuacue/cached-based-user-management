import React, { HTMLAttributes } from "react";
import { Button } from "./Button";

export function PrimaryButton({
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement> & { type?: string }) {
  return (
    <Button className={`h-4 bg-white text-black ring-1 ring-black`} {...rest}>
      {children}
    </Button>
  );
}
