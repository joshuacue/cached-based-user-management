import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";

describe("FilterButtons component", () => {
  afterEach(cleanup);

  const mockOnListTypeChange = jest.fn();

  it("renders filter buttons correctly", () => {
    render(<FilterButtons onListTypeChange={mockOnListTypeChange} />);
    const filterButtons = screen.getAllByRole("button");
    expect(filterButtons).toHaveLength(3);
    filterButtons.forEach((button, index) => {
      const filter = ["all", "favorites", "trash"][index];
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(filter);
    });
  });

  it("calls onListTypeChange with the correct filter when a button is clicked", () => {
    render(<FilterButtons onListTypeChange={mockOnListTypeChange} />);
    const filterButtons = screen.getAllByRole("button");
    filterButtons.forEach((button, index) => {
      const filter = ["all", "favorites", "trash"][index];
      fireEvent.click(button);
      expect(mockOnListTypeChange).toHaveBeenCalledWith(filter);
    });
  });
});
