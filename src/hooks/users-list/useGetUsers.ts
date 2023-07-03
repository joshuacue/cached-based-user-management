"use client";
import { useQuery } from "react-query";
import axios from "axios";
import { User } from "@/utils/types";

export function useGetUsers() {
  return useQuery(
    "users",
    async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      return data;
    },
    {
      staleTime: 20000,
      select: (data: User[]) => {
        return (
          data.map((user) => ({
            ...user,
            avatar: `https://avatars.dicebear.com/v2/avataaars/{{${user.username}}}.svg?options[mood][]=happy`,
          })) || []
        );
      },
    },
  );
}
