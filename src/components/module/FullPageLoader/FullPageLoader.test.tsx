import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { FullPageLoader } from "./FullPageLoader";

describe("FullPageLoader component", () => {
  afterEach(cleanup);

  it("renders loader elements correctly", () => {
    render(<FullPageLoader />);
    const loaderElements = screen.getAllByRole("status");
    expect(loaderElements).toHaveLength(3);
    loaderElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
