import React, { PropsWithChildren } from "react";

type UserCardButtonProps = PropsWithChildren & {
  onClick: () => void;
  disabled: boolean;
  text: string;
  className?: string;
};

export const UserCardButton: React.FC<UserCardButtonProps> = ({
  children,
  onClick,
  disabled,
  text,
  className = "",
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`w-full flex justify-center items-center py-2 hover:bg-gray-200 disabled:text-gray-3 disabled:bg-transparent disabled:ring-0 hover:ring-[2px] ring-gray-1 ${className}`}
      disabled={disabled}
      data-testid={text}
    >
      {children}
      <span className="sr-only">{text}</span>
    </button>
  );
};

export default UserCardButton;
