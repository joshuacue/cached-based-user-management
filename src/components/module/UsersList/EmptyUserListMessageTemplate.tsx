"use client";
import React from "react";

export const EmptyUserListMessageTemplate: React.FC<{ message: string }> = ({
  message,
}) => {
  return (
    <div
      className={`flex py-4 items-center justify-center w-full h-full min-h-[80vh] text-center text-gray-3`}
    >
      <span className={`text-2`}>{message}</span>
    </div>
  );
};

export default EmptyUserListMessageTemplate;
