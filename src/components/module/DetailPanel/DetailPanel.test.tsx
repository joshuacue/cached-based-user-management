import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DetailPanel } from "./DetailPanel";

describe("DetailPanel component", () => {
  it("renders detail panel correctly with title and children", () => {
    const title = "Test Panel";
    const children = "Test Children";

    render(<DetailPanel title={title}>{children}</DetailPanel>);

    expect(screen.getByRole("region")).toHaveAttribute("aria-label", title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
