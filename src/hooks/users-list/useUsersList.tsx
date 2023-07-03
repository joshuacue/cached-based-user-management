"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetUsers } from "./useGetUsers";
import { useUpdateUser } from "../user/useUpdateUser";
import { useDeleteUser } from "../user/useDeleteUser";
import { UsersListProps } from "../../components/module/UsersList/UsersList";
import { notifyError, notifySuccess } from "@/utils/helpers";
import { User, Users } from "@/utils/types";

export function useUsersList(filter: UsersListProps["filter"]) {
  const previousFilter = useMemo(() => filter, [filter]);
  const { data: users, isLoading, error } = useGetUsers();
  const { push } = useRouter();

  const [usersDisplay, setUsersDisplay] = useState<Users>([]);
  const [deletedUsersList, setDeletedUsersList] = useState<number[]>([]);
  const [markedFavorites, setMarkedFavorites] = useState<number[]>([]);

  const { mutateAsync: deleteUserMutation } = useDeleteUser();

  useEffect(() => {
    if (!error) return;
    notifyError((error as Error).message);
  }, [error]);

  useEffect(() => {
    if (!users) return;

    let activeUsers = [...users].filter(
      ({ id: userId }) => !deletedUsersList.includes(userId),
    );

    switch (filter) {
      case "favorites":
        setUsersDisplay(
          [...activeUsers].filter(({ id }) => markedFavorites.includes(id)),
        );
        break;
      case "trash":
        setUsersDisplay(
          [...users].filter(({ id }) => deletedUsersList.includes(id)),
        );
        break;
      default:
        setUsersDisplay(activeUsers);
        break;
    }
  }, [users, filter, markedFavorites, deletedUsersList]);

  const deleteUserById = (id: number) => {
    /**
     * I want to remove the user from the screen first
     * so it feels like the user is deleted instantly
     * but will put it back if the deletion fails,
     * deletion error could be due to network/server error
     */
    return async () => {
      // save the current state of the users list for restoration if delete failes
      const usersListBeforeDelete = [...usersDisplay];
      // remove the user from the screen
      setUsersDisplay((prevFilter) =>
        prevFilter.filter(({ id: userId }) => userId !== id),
      );
      // add the user to the deleted users list
      setDeletedUsersList((prevFilter) => [...prevFilter, id]);
      // delete the user from the endpoint (endpoint is fake but it does return a response)
      try {
        const isDone = await deleteUserMutation({ id });
        isDone && notifySuccess("User deleted successfully");
      } catch (err) {
        notifyError((err as Error).message);
        // if the deletion fails, restore the user to the screen
        setUsersDisplay(usersListBeforeDelete);
        //remove the user from the deleted users list
        setDeletedUsersList((prevFilter) =>
          prevFilter.filter((userId) => userId !== id),
        );
      }
    };
  };

  const toggleFavoriteById = (id: number) => {
    return () => {
      if (markedFavorites.includes(id)) {
        setMarkedFavorites((prevFilter) =>
          prevFilter.filter((userId) => userId !== id),
        );
        notifySuccess("Removed from favorites");
        return;
      }
      setMarkedFavorites([...markedFavorites, id]);
      notifySuccess("Added to favorites");
    };
  };

  const onListTypeChange = (filter: string) => {
    return () => {
      if (previousFilter === filter) return;
      push("/users-list?filter=" + filter);
    };
  };

  return {
    onListTypeChange,
    usersDisplay,
    markedFavorites,
    deletedUsersList,
    deleteUserById,
    toggleFavoriteById,
    isLoading,
    error,
  };
}
