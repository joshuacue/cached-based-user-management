import { render } from "@testing-library/react";
import { ProfileDisplay } from "./ProfileDisplay";
import { mockUser } from "@/utils/__test_constants";
import { Provider } from "react-redux";
import { Providers } from "@/redux/provider";

const mockProps = {
  id: mockUser.id,
  username: mockUser.username,
  name: mockUser.name,
  companyName: mockUser.company.name,
};

describe("ProfileDisplay component", () => {
  it("should render avatar, name and company name correctly", () => {
    const { container } = render(
      <Providers>
        <ProfileDisplay {...mockProps} />
      </Providers>,
    );

    // Check if the rendered HTML includes the expected image URL
    expect(container.innerHTML).toContain(`avatars.dicebear.com`);
    expect(container.innerHTML).toContain(mockProps.username);
    // Check if the name and company name are correctly rendered
    expect(container.textContent).toContain(mockProps.name);
    expect(container.textContent).toContain(mockProps.companyName);
  });
});
