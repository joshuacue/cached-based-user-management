import { render, fireEvent } from '@testing-library/react';
import UsersList from './UsersList';
import { useUsersList } from "../../../hooks/users-list/useUsersList";
import { mockUserWithAvatar } from '@/utils/__test_constants';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock("../../../hooks/users-list/useUsersList");

const mockFn = jest.fn();

const client = new QueryClient();

jest.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useSearchParams: () => [new URLSearchParams({ revalidate: "1" })],
}));

describe('UsersList', () => {
  it('should render without crashing', () => {
    (useUsersList as jest.Mock).mockReturnValue({
      isLoading: false,
      usersDisplay: [mockUserWithAvatar],
      markedFavorites: [],
      deletedUsersList: [],
      onListTypeChange: jest.fn(),
      deleteUserById: jest.fn(() => mockFn), // Mock return as a function
      toggleFavoriteById: jest.fn(() => mockFn), // Mock return as a function
      editUserById: jest.fn(() => mockFn), // Mock return as a function
    });

    const { getByTestId } = render(
      <QueryClientProvider client={client}>
        <UsersList />
      </QueryClientProvider>,
    );

    // Simulate a click event on the 'delete' and 'favorite' and 'edit' buttons
    fireEvent.click(getByTestId('favorite'));

    // Verify that the mock functions were called when the buttons were clicked
    expect(mockFn).toHaveBeenCalledTimes(1);

    // repeating steps above for the other buttons
    fireEvent.click(getByTestId('delete'));
    expect(mockFn).toHaveBeenCalledTimes(1);

    // repeating steps above for the other buttons
    fireEvent.click(getByTestId('edit'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
});
