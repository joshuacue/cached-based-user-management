import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { PrimaryButton } from "./PrimaryButton";

describe("PrimaryButton component", () => {
  afterEach(cleanup);

  it("renders button with correct text", () => {
    const buttonText = "Click me";
    render(<PrimaryButton>{buttonText}</PrimaryButton>);
    const buttonElement = screen.getByText(buttonText).closest("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies additional class names correctly", () => {
    const additionalClassName = "custom-class";
    render(
      <PrimaryButton className={additionalClassName}>Button</PrimaryButton>,
    );
    const buttonElement = screen.getByText("Button").closest("button");
    expect(buttonElement).toHaveClass(additionalClassName);
  });
});
