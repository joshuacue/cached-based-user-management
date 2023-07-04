"use client";
import React from "react";
import { UserCard } from "../UserCard/UserCard";
import { FilterButtons } from "./FilterButtons";
import { useUsersList } from "../../../hooks/users-list/useUsersList";
import { FullPageLoader } from "../FullPageLoader/FullPageLoader";
import UsersListContainer from "./UsersListContainer";

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
      {isLoading && <FullPageLoader />}
      <FilterButtons
        currentFilter={filter}
        onListTypeChange={onListTypeChange}
      />
      <UsersListContainer
        usersDisplayLength={usersDisplay?.length}
        currentFilter={filter}
      >
        {usersDisplay?.map(({ id, ...rest }) => (
          <UserCard
            key={id}
            id={id}
            isFavorite={markedFavorites.includes(id)}
            isDeleted={deletedUsersList.includes(id)}
            onDeleteClick={deleteUserById(id)}
            onFavoriteClick={toggleFavoriteById(id)}
            enableEdit={true}
            {...rest}
          />
        ))}
      </UsersListContainer>
    </>
  );
}

export default UsersList;
