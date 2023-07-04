import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DetailItem } from "./DetailItem";

const props = {
  label: "Test Label",
  value: "Test Value",
  isLink: false,
};

describe("DetailItem component", () => {
  it("renders detail item correctly when isLink is false", () => {
    render(<DetailItem {...props} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.value)).toBeInTheDocument();
  });

  it("renders detail item correctly when isLink is true", () => {
    const props = {
      label: "Test Label",
      value: "www.example.com",
      isLink: true,
    };

    render(<DetailItem {...props} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `https://${props.value}`);
    expect(link).toHaveTextContent(props.value);
  });
});
