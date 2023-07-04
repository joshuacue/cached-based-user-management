"use client";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGetUsers } from "./useGetUsers";
import { useDeleteUser } from "../user/useDeleteUser";
import { UsersListProps } from "../../components/module/UsersList/UsersList";
import { notifyError, notifySuccess } from "@/utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import {
  removeUserDisplay,
  setDeletedUsersList,
  setPreviousUsersDisplay,
  setUsersDisplay,
  toggleFavorite,
} from "@/redux/slices/userSlice";

export function useUsersList(filter: UsersListProps["filter"]) {
  const previousFilter = useMemo(() => filter, [filter]);
  const { data: users, isLoading, error } = useGetUsers();
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const usersDisplay = useSelector(
    (state: RootState) => state.user.usersDisplay,
  );
  const deletedUsersList = useSelector(
    (state: RootState) => state.user.deletedUsersList,
  );
  const markedFavorites = useSelector(
    (state: RootState) => state.user.markedFavorites,
  );
  const usersListBeforeDelete = useSelector(
    (state: RootState) => state.user.usersDisplay,
  );

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
        dispatch(
          setUsersDisplay(
            [...activeUsers].filter(({ id }) => markedFavorites.includes(id)),
          ),
        );
        break;
      case "trash":
        dispatch(
          setUsersDisplay(
            [...users].filter(({ id }) => deletedUsersList.includes(id)),
          ),
        );
        break;
      default:
        dispatch(setUsersDisplay(activeUsers));
        break;
    }
  }, [users, filter, markedFavorites, deletedUsersList]);

  const deleteUserById = (id: number) => {
    return async () => {
      // Save the current state of the users list for restoration if delete fails

      // Store our previous state in case we need to revert the changes
      dispatch(setPreviousUsersDisplay(usersListBeforeDelete));

      // Remove the user from the screen
      dispatch(removeUserDisplay(id));

      // Add the user to the deleted users list
      dispatch(setDeletedUsersList([...deletedUsersList, id]));

      try {
        // Delete the user from the endpoint
        const isDone = await deleteUserMutation({ id });

        if (isDone) {
          notifySuccess("User deleted successfully");
        }
      } catch (err) {
        notifyError((err as Error).message);

        // If the deletion fails, restore the user to the screen
        dispatch(setUsersDisplay(usersListBeforeDelete));

        // Remove the user from the deleted users list
        dispatch(
          setDeletedUsersList(
            deletedUsersList.filter((userId) => userId !== id),
          ),
        );
      }
    };
  };

  const toggleFavoriteById = (id: number) => {
    return () => {
      // Check if it's already a favorite
      const isAlreadyFavorite = markedFavorites.includes(id);

      // Toggle the favorite status
      dispatch(toggleFavorite(id));

      // Notify the user
      if (isAlreadyFavorite) {
        notifySuccess("Removed from favorites");
      } else {
        notifySuccess("Added to favorites");
      }
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
