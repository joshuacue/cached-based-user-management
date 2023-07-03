"use client";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { User } from "@/utils/types";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const updateUser = useMutation(
    ({ id, ...rest }: User) => {
      return axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        rest,
      );
    },
    {
      onSuccess: (data) => {
        /**
         * Updating the query cache only because there is no backend
         * and still the edit can be saved to the cache until the page is * refreshed
         */
        queryClient.setQueryData("users", (oldData: User[] | undefined) => {
          if (!oldData) return [];
          return oldData.map((user) =>
            user.id === data.data.id ? { ...user, ...data.data } : user,
          );
        });
      },
    },
  );

  return updateUser;
}
