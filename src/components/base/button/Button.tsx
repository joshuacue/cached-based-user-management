import React, { HTMLAttributes } from "react";

export function Button({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`py-0.5 px-2 min-w-[10em] rounded-0.4 ${className} hover:opacity-60`}
      {...rest}
    >
      <span className={`text-1.6`}>{children}</span>
    </button>
  );
}
