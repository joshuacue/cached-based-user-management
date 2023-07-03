import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { EmptyUserListMessageTemplate } from "./EmptyUserListMessageTemplate";

describe("EmptyUserListMessageTemplate component", () => {
  afterEach(cleanup);

  const mockMessage = "No users found.";

  it("renders message correctly", () => {
    render(<EmptyUserListMessageTemplate message={mockMessage} />);
    const messageElement = screen.getByText(mockMessage);
    expect(messageElement).toBeInTheDocument();
  });
});
