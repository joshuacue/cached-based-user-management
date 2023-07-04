import React from "react";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { IconText } from "../IconText/IconText";
import { UserCardDetailsProps } from "@/utils/types";

const formatWebsiteUrl = (website: string) => {
  if (website.startsWith("http")) return website;
  return `https://${website}`;
};

export function UserDetails({
  name,
  email,
  phone,
  website,
}: UserCardDetailsProps) {
  const contactDetails = [
    {
      icon: EnvelopeIcon,
      text: email,
      href: `mailto:${email}`,
    },
    {
      icon: PhoneIcon,
      text: phone,
      href: `tel:${phone}`,
    },
    {
      icon: GlobeAltIcon,
      text: website,
      href: formatWebsiteUrl(website),
    },
  ];

  return (
    <div data-testid="user-details" className={`p-2.4`}>
      <div className={`mr-auto space-y-0.5`}>
        <span className={`flex text-center text-2`}>{name}</span>
        {contactDetails?.map(({ icon: Icon, text, href }, index) => (
          <IconText
            key={text + `_${index}`}
            icon={Icon}
            text={text}
            href={href}
          />
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
