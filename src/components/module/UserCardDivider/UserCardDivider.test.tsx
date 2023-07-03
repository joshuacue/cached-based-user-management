import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { UserCardDivider } from "./UserCardDivider";

describe("UserCardDivider component", () => {
  afterEach(cleanup);

  it("renders background element correctly", () => {
    render(<UserCardDivider />);
    const backgroundElement = screen.getByTestId("separator-element");
    expect(backgroundElement).toBeInTheDocument();
    expect(backgroundElement).toHaveClass("bg-gray-1");
  });
});
