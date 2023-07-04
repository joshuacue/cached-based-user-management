"use-client";
import { UserType } from "@/utils/types";
import { DetailItem } from "../DetailItem/DetailItem";
import { DetailPanel } from "../DetailPanel/DetailPanel";
import { Address } from "../Address/Address";

export const UserPreviewDetails = (props: UserType) => {
  const details = [
    { label: "Username", value: props.username },
    { label: "Name", value: props.name },
    { label: "Email", value: props.email },
    { label: "Phone", value: props.phone },
    { label: "Website", value: props.website, isLink: true },
    {
      label: "LatLong",
      value: `${props.address.geo.lat}, ${props.address.geo.lng}`,
    },
  ];
  const { geo, ...address } = props.address;

  return (
    <DetailPanel title="User Details">
      {details.map((detail) => (
        <DetailItem
          key={detail.label}
          label={detail.label}
          value={detail.value}
          isLink={detail.isLink}
        />
      ))}
      <Address {...address} />
    </DetailPanel>
  );
};

export default UserPreviewDetails;
