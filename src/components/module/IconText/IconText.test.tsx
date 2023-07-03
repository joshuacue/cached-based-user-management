import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { IconText } from "./IconText";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

describe("IconText component", () => {
  afterEach(cleanup);

  it("renders text correctly", () => {
    const text = "Example Text";
    render(<IconText icon={GlobeAltIcon} text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it("renders anchor element with correct href when provided", () => {
    const text = "Link Text";
    const href = "https://example.com";
    render(<IconText icon={GlobeAltIcon} text={text} href={href} />);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", href);
    expect(anchorElement).toHaveAttribute("target", "_blank");
  });

  it("renders span element when href prop is not provided", () => {
    const text = "Span Text";
    render(<IconText icon={GlobeAltIcon} text={text} />);
    const spanElement = screen.getByText(text);
    expect(spanElement).toBeInTheDocument();
  });
});
