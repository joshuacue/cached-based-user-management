import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { UserDetails } from "./UserDetails";

describe("UserDetails", () => {
  const mockProps = {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };

  beforeEach(() => {
    render(<UserDetails {...mockProps} />);
  });

  it("renders without crashing", () => {
    expect(screen.getByTestId("user-details")).toBeInTheDocument(); // Ensure your UserDetails component has a data-testid="user-details"
  });

  it("renders the name correctly", () => {
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  it("renders contact details correctly", () => {
    const emailDetail = screen.getByText(mockProps.email);
    expect(emailDetail).toBeInTheDocument();
    expect(emailDetail.closest("a")).toHaveAttribute(
      "href",
      `mailto:${mockProps.email}`,
    );

    const phoneDetail = screen.getByText(mockProps.phone);
    expect(phoneDetail).toBeInTheDocument();
    expect(phoneDetail.closest("a")).toHaveAttribute(
      "href",
      `tel:${mockProps.phone}`,
    );

    const websiteDetail = screen.getByText(mockProps.website);
    expect(websiteDetail).toBeInTheDocument();
    expect(websiteDetail.closest("a")).toHaveAttribute(
      "href",
      `https://${mockProps.website}`,
    );
  });
});
