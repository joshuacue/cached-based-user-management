import React, { HTMLAttributes } from "react";
import { Button } from "./Button";

export function SecondaryButton({
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={`bg-red-500 h-4 ring-1 ring-red-500 text-white`}
      {...rest}
    >
      {children}
    </Button>
  );
}
