import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserActionsButtons } from "./UserActionsButtons";

describe("UserActionsButtons", () => {
  const mockProps = {
    isFavorite: false,
    onFavoriteClick: jest.fn(),
    onEditClick: jest.fn(),
    onDeleteClick: jest.fn(),
  };

  describe("when not deleted", () => {
    beforeEach(() => {
      render(<UserActionsButtons {...mockProps} isDeleted={false} />);
    });

    it("renders without crashing", () => {
      expect(screen.getByTestId("user-actions-buttons")).toBeInTheDocument();
    });

    it("buttons have correct properties and click events", () => {
      const favoriteButton = screen.getByTestId("favorite");
      expect(favoriteButton).toBeInTheDocument();
      expect(favoriteButton).not.toBeDisabled();
      fireEvent.click(favoriteButton);
      expect(mockProps.onFavoriteClick).toHaveBeenCalled();

      const editButton = screen.getByTestId("edit");
      expect(editButton).toBeInTheDocument();
      expect(editButton).not.toBeDisabled();
      fireEvent.click(editButton);
      expect(mockProps.onEditClick).toHaveBeenCalled();

      const deleteButton = screen.getByTestId("delete");
      expect(deleteButton).toBeInTheDocument();
      expect(deleteButton).not.toBeDisabled();
      fireEvent.click(deleteButton);
      expect(mockProps.onDeleteClick).toHaveBeenCalled();
    });
  });

  describe("when deleted", () => {
    beforeEach(() => {
      render(<UserActionsButtons {...mockProps} isDeleted={true} />);
    });

    it("all buttons are disabled", () => {
      const favoriteButton = screen.getByTestId("favorite");
      expect(favoriteButton).toBeInTheDocument();
      expect(favoriteButton).toBeDisabled();

      const editButton = screen.getByTestId("edit");
      expect(editButton).toBeInTheDocument();
      expect(editButton).toBeDisabled();

      const deleteButton = screen.getByTestId("delete");
      expect(deleteButton).toBeInTheDocument();
      expect(deleteButton).toBeDisabled();
    });
  });
});
