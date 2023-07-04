"use client";
import React from "react";
import { UsersList, UsersListProps } from "@/components/module";
import { withMaxWidthHOC } from "@/providers/withMaxWidthHOC";

export interface UsersListPageProps {
  /**
   * read from url query params
   * @example ?filter=all where filter is the searchParams
   */
  searchParams: UsersListProps;
}

const UsersListPage = ({ searchParams }: UsersListPageProps) => {
  const filter = searchParams["filter"] as UsersListProps["filter"];
  return <UsersList filter={filter} />;
};

export default withMaxWidthHOC(UsersListPage);
