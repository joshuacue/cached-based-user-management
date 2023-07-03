import {
  UsersList,
  UsersListProps,
} from "@/components/module/UsersList/UsersList";
import { withMaxWidthHOC } from "@/providers/withMaxWidthHOC";
import React, { ComponentType } from "react";

export interface UsersListPageProps {
  searchParams: UsersListProps;
}

const UsersListPage = ({ searchParams }: UsersListPageProps) => {
  const filter = searchParams["filter"] as UsersListProps["filter"];
  return <UsersList filter={filter} />;
};

export default withMaxWidthHOC(UsersListPage);
