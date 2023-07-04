import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersListContainer from "./UsersListContainer";

describe("UsersListContainer", () => {
  it("renders EmptyUserListMessageTemplate when no users are present", () => {
    render(
      <UsersListContainer usersDisplayLength={0} currentFilter="test">
        <div>Child Component</div>
      </UsersListContainer>,
    );
    expect(screen.getByText("No users found on test.")).toBeInTheDocument();
    expect(screen.queryByText("Child Component")).not.toBeInTheDocument();
  });

  it("renders children when users are present", () => {
    render(
      <UsersListContainer usersDisplayLength={1} currentFilter="test">
        <div>Child Component</div>
      </UsersListContainer>,
    );
    expect(screen.getByText("Child Component")).toBeInTheDocument();
    expect(
      screen.queryByText("No users found on test."),
    ).not.toBeInTheDocument();
  });
});
