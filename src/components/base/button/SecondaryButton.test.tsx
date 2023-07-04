import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { SecondaryButton } from "./SecondaryButton";

describe("SecondaryButton component", () => {
  afterEach(cleanup);

  it("renders button with correct text", () => {
    const buttonText = "Click me";
    render(<SecondaryButton>{buttonText}</SecondaryButton>);
    const buttonElement = screen.getByText(buttonText).closest("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies additional class names correctly", () => {
    const additionalClassName = "custom-class";
    render(
      <SecondaryButton className={additionalClassName}>Button</SecondaryButton>,
    );
    const buttonElement = screen.getByText("Button").closest("button");
    expect(buttonElement).toHaveClass(additionalClassName);
  });
});
