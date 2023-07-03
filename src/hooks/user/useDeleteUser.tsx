"use client";
import { useMutation } from "react-query";
import axios from "axios";

export function useDeleteUser() {
  const deleteUser = useMutation(({ id }: { id: number }) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  });

  return deleteUser;
}
