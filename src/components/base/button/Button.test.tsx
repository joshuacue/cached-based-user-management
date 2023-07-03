import "@testing-library/jest-dom";
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("renders button with correct text", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies additional class names correctly", () => {
    const additionalClassName = "custom-class";
    render(<Button className={additionalClassName}>Button</Button>);
    const buttonElement = screen.getByText("Button").closest("button");
    expect(buttonElement).toHaveClass(additionalClassName);
  });
});
