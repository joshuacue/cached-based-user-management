import { UserPreviewDetails } from "./UserPreviewDetails";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockUser } from "@/utils/__test_constants";

describe("UserPreviewDetails component", () => {
  it("renders user details correctly", () => {
    render(<UserPreviewDetails {...mockUser} />);

    expect(screen.getByText("User Details")).toBeInTheDocument();
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUser.website)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockUser.address.geo.lat}, ${mockUser.address.geo.lng}`,
      ),
    ).toBeInTheDocument();
  });
});
