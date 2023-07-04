import { LinkItem } from "./LinkItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LinkItem component", () => {
  it("renders with correct href and value", () => {
    const props = {
      href: "https://www.example.com",
      value: "Example Link",
    };

    render(<LinkItem {...props} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", props.href);
    expect(link).toHaveTextContent(props.value);
  });
});
