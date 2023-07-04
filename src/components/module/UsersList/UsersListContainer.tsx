import React from "react";
import { EmptyUserListMessageTemplate } from "./EmptyUserListMessageTemplate";

export interface UsersListContainerProps {
  usersDisplayLength: number;
  children: React.ReactNode;
  currentFilter: string;
}

export function UsersListContainer({
  usersDisplayLength,
  currentFilter,
  children,
}: UsersListContainerProps) {
  return (
    <div className={`w-full bg-gray-200 px-1 py-2 rounded-r-0.5 rounded-b-0.5`}>
      {!usersDisplayLength ? (
        <EmptyUserListMessageTemplate
          message={`No users found on ${currentFilter}.`}
        />
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default UsersListContainer;
