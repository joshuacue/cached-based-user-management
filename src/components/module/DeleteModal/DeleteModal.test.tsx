import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteModal } from "./DeleteModal";

describe("DeleteModal", () => {
  const onCancelMock = jest.fn();
  const onConfirmMock = jest.fn();

  beforeEach(() => {
    render(<DeleteModal onCancel={onCancelMock} onConfirm={onConfirmMock} />);
  });

  it("renders without crashing", () => {
    expect(
      screen.getByText(/Are you sure you want to delete this user\?/i),
    ).toBeInTheDocument();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when Yes, Delete User button is clicked", () => {
    fireEvent.click(screen.getByText(/Yes, Delete User/i));
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
