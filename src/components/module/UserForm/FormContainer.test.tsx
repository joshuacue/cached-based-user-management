import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { FormContainer } from "./FormContainer";

describe("FormContainer component", () => {
  afterEach(cleanup);

  const mockSubmit = jest.fn();

  it("renders form with correct title", () => {
    render(
      <FormContainer onSubmit={mockSubmit}>
        <div></div>
      </FormContainer>,
    );
    const formTitle = screen.getByText("Edit User Details");
    expect(formTitle).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", () => {
    render(
      <FormContainer onSubmit={mockSubmit}>
        <div></div>
      </FormContainer>,
    );
    const form = screen.getByTestId("user-form");
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
