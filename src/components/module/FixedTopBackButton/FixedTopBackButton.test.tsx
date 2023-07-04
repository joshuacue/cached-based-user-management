import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FixedTopBackButton } from "./FixedTopBackButton";

describe("FixedTopBackButton component", () => {
  it("renders without crashing", () => {
    render(<FixedTopBackButton />);
    expect(screen.getByText("Back to list")).toBeInTheDocument();
  });
});
