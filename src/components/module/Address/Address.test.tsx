import "@testing-library/jest-dom";
import { AddressType } from "@/utils/types";
import { render, screen } from "@testing-library/react";
import { Address } from "./Address";
import { mockAddress } from "@/utils/__test_constants";

describe("Address component", () => {
  it("should render address information correctly", () => {
    render(<Address {...mockAddress} />);

    expect(screen.getByText("Address")).toBeInTheDocument();

    Object.values(mockAddress).forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it("should not render if props are not provided", () => {
    render(<Address />);

    expect(screen.queryByText(mockAddress.street)).not.toBeInTheDocument();
  });
});
