// storybook 7 version of UserCard.tsx
import React from "react";
import { Meta } from "@storybook/react";

import { UserCard } from "./UserCard";

export default {
  title: "Module/UserCard",
  component: UserCard,
  decorators: [
    (Story) => (
      <div className={`w-[40em] mx-auto`}>
        <h1 className={`text-3 mb-1`}>
          This is to just show storybook 7 works with new nextjs 13
        </h1>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary = {
  args: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    avatar: `https://avatars.dicebear.com/v2/avataaars/{{Bret}}.svg?options[mood][]=happy`,
    onFavoriteClick: () => null,
    enableEdit: false,
  },
};
