import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserCardButton } from "./UserCardButton";

describe("UserCardButton", () => {
  it("renders without crashing", () => {
    const mockOnClick = jest.fn();
    render(
      <UserCardButton onClick={mockOnClick} disabled={false} text="test">
        Test
      </UserCardButton>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <UserCardButton onClick={mockOnClick} disabled={false} text="test">
        Test
      </UserCardButton>,
    );
    fireEvent.click(screen.getByText("Test"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not call the onClick prop when disabled", () => {
    const mockOnClick = jest.fn();
    render(
      <UserCardButton onClick={mockOnClick} disabled={true} text="test">
        Test
      </UserCardButton>,
    );
    fireEvent.click(screen.getByText("Test"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("has the correct aria-hidden attribute", () => {
    const mockOnClick = jest.fn();
    render(
      <UserCardButton onClick={mockOnClick} disabled={false} text="test">
        Test
      </UserCardButton>,
    );
    expect(screen.getByTestId("test")).toHaveTextContent("Test");
  });
});
