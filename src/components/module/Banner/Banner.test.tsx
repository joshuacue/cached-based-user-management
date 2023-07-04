import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Banner } from "./Banner";

describe("Banner component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Banner />);
    expect(container.firstChild).toHaveClass("relative");
  });

  it("includes the correct image source in the document", () => {
    const { container } = render(<Banner />);
    expect(container.innerHTML).toContain("cover.jpeg");
  });
});
