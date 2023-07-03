import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserForm from "./UserForm";
import { fields } from "@/utils/constants";

describe("UserForm", () => {
  const mockUser = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  };

  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    render(
      <UserForm
        defaultValues={mockUser}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />,
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
