import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CompanyDetails } from "./CompanyDetails";
import { mockUser } from "@/utils/__test_constants";

const mockCompanyDetails = mockUser.company;

describe("CompanyDetails component", () => {
  it("renders company details correctly", () => {
    render(<CompanyDetails {...mockCompanyDetails} />);

    // Check if the title is rendered
    expect(screen.getByText("Company Details")).toBeInTheDocument();

    // Check if the company details are rendered
    const details = [
      { label: "Company Name", value: mockCompanyDetails.name },
      { label: "Catch Phrase", value: mockCompanyDetails.catchPhrase },
      { label: "Business Strategy", value: mockCompanyDetails.bs },
    ];

    details.forEach((detail) => {
      expect(screen.getByText(detail.label)).toBeInTheDocument();
      expect(screen.getByText(detail.value)).toBeInTheDocument();
    });
  });
});
