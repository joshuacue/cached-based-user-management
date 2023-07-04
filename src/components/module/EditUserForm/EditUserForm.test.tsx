import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditUserForm } from "./EditUserForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockUser } from "@/utils/__test_constants";

const client = new QueryClient();

describe("EditUserForm component", () => {
  it("should open UserForm when Edit button is clicked", () => {
    render(
      <QueryClientProvider client={client}>
        <EditUserForm {...mockUser} />
      </QueryClientProvider>,
    );

    const button = screen.getByText("Edit");
    fireEvent.click(button);

    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
});
