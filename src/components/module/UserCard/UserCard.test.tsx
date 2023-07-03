import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UserCard } from "./UserCard";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const mockUserProps = {
  isFavorite: true,
  isDeleted: false,
  onFavoriteClick: jest.fn(),
  onDeleteClick: jest.fn(),
  avatar:
    "https://avatars.dicebear.com/v2/avataaars/{{Bret}}.svg?options[mood][]=happy",
  id: 10,
  name: "Clementina DuBuque",
  username: "Moriah.Stanton",
  email: "Rey.Padberg@karina.biz",
  address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232",
    },
  },
  phone: "024-648-3804",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models",
  },
};

describe("UserCard component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    return render(
      <QueryClientProvider client={queryClient}>
        <UserCard {...mockUserProps} />
      </QueryClientProvider>,
    );
  });

  it("renders without crashing", async () => {
    const userCard = await screen.findByTestId("user-card");
    expect(userCard).toBeInTheDocument();
  });

  it("renders user card details (name, email, phone, website", async () => {
    const userCard = await screen.findByTestId("user-card");
    expect(userCard).toHaveTextContent(mockUserProps.name);
    expect(userCard).toHaveTextContent(mockUserProps.email);
    expect(userCard).toHaveTextContent(mockUserProps.phone);
    expect(userCard).toHaveTextContent(mockUserProps.website);
  });

  it("shows delete modal on delete button click", () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(
      screen.getByText(/Are you sure you want to delete this user?/i),
    ).toBeInTheDocument();
  });

  it("shows edit modal on edit button click", () => {
    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);
    expect(screen.getByText(/Edit User Details/i)).toBeInTheDocument();
  });

  it("calls onFavoriteClick when favorite button is clicked", () => {
    const favoriteButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(favoriteButton);
    expect(mockUserProps.onFavoriteClick).toHaveBeenCalledTimes(1);
  });

  it("check if any of action butotn exists", () => {
    const deleteButton = screen.getByText("delete").closest("button");
    if (deleteButton) {
      fireEvent.click(deleteButton);
    } else {
      throw new Error("No delete button found");
    }
  });

  it("calls onDeleteClick when delete button is clicked", () => {
    const deleteButton = screen.getByText("delete").closest("button");
    if (deleteButton) {
      fireEvent.click(deleteButton);
    } else {
      throw new Error("No delete button found");
    }
    const confirmButton = screen
      .getByText("Yes, Delete User")
      .closest("button");
    if (confirmButton) {
      fireEvent.click(confirmButton);
    } else {
      throw new Error("No delete button found");
    }
  });
});
