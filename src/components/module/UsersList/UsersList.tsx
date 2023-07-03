"use client";
import React from "react";
import { UserCard } from "../UserCard/UserCard";
import { FilterButtons } from "./FilterButtons";
import { useUsersList } from "../../../hooks/users-list/useUsersList";
import { FullPageLoader } from "../FullPageLoader/FullPageLoader";
import { EmptyUserListMessageTemplate } from "./EmptyUserListMessageTemplate";

export interface UsersListProps {
  /**
   * filter types from URL query params
   */
  filter?: "favorites" | "all" | "trash";
}

export function UsersList({ filter = `all` }: UsersListProps) {
  const {
    onListTypeChange,
    usersDisplay,
    markedFavorites,
    toggleFavoriteById,
    deleteUserById,
    deletedUsersList,
    isLoading,
  } = useUsersList(filter);

  return (
    <>
      <FilterButtons onListTypeChange={onListTypeChange} />
      {isLoading && <FullPageLoader />}
      {!usersDisplay?.length ? (
        <EmptyUserListMessageTemplate
          message={`No users found on ${filter}.`}
        />
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2`}
        >
          {usersDisplay?.map(({ id, ...rest }) => (
            <UserCard
              key={id}
              id={id}
              isFavorite={markedFavorites.includes(id)}
              isDeleted={deletedUsersList.includes(id)}
              onDeleteClick={deleteUserById(id)}
              onFavoriteClick={toggleFavoriteById(id)}
              {...rest}
            />
          ))}
        </div>
      )}
    </>
  );
}