"use-client";
import { CompanyType } from "@/utils/types";
import { DetailItem } from "../DetailItem/DetailItem";
import { DetailPanel } from "../DetailPanel/DetailPanel";

export const CompanyDetails = ({ name, catchPhrase, bs }: CompanyType) => {
  const details = [
    { label: "Company Name", value: name },
    { label: "Catch Phrase", value: catchPhrase },
    { label: "Business Strategy", value: bs },
  ];

  return (
    <DetailPanel title="Company Details">
      {details.map((detail) => (
        <DetailItem
          key={detail.label}
          label={detail.label}
          value={detail.value}
        />
      ))}
    </DetailPanel>
  );
};

export default CompanyDetails;
