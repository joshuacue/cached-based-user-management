import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { InputField, InputFieldProps } from "./InputField";

describe("InputField component", () => {
  afterEach(cleanup);

  it("renders label and input correctly", () => {
    const label = "Username";
    render(<InputField label={label} />);
    const labelElement = screen.getByText(label);
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("applies hasError class when hasError prop is true", () => {
    const label = "Username";
    const hasError = true;
    render(<InputField label={label} hasError={hasError} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("focus:outline-red-500");
  });

  it("forwards the ref correctly", () => {
    const label = "Username";
    const ref = React.createRef<HTMLInputElement>();
    render(<InputField label={label} ref={ref} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toEqual(ref.current);
  });
});
