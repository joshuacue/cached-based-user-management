import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserCardContainer } from "./UserCardContainer";
import { mockUser } from "@/utils/__test_constants";

jest.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useSearchParams: () => [new URLSearchParams({ revalidate: "1" })],
}));

describe("UserCardContainer", () => {
  it("renders UserCardContainer component", () => {
    render(<UserCardContainer username={mockUser.username} />);
    expect(screen.getByTestId("user-card")).toBeInTheDocument();
  });
});
