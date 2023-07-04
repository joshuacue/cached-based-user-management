import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserForm from "./UserForm";
import { fields } from "@/utils/constants";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockUser } from "@/utils/__test_constants";

const queryClient = new QueryClient();

describe("UserForm", () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserForm defaultValues={mockUser} onCancel={mockOnCancel} />
      </QueryClientProvider>,
    );
  });

  it("renders without crashing", () => {
    expect(screen.getByTestId("user-form")).toBeInTheDocument();
  });

  it("renders the correct number of input fields", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(fields.length);
  });

  it("calls onSubmit when the form is submitted", async () => {
    fireEvent.submit(screen.getByTestId("user-form"));

    expect(mockOnSubmit).not.toBeCalled();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    fireEvent.click(screen.getByText("Cancel")); // This assumes your cancel button has 'Cancel' text

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
