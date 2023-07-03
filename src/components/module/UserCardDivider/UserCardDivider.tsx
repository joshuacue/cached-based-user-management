import React from "react";

export const UserCardDivider = () => {
  return (
    <div  className={`hover:invisible w-0.2 py-2`}>
      <div data-testid={`separator-element`} className={`bg-gray-1 h-full`} />
    </div>
  );
};
