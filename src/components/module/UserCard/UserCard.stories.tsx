// storybook 7 version of UserCard.tsx
import React from "react";
import { Meta } from "@storybook/react";

import { UserCard } from "./UserCard";

export default {
  title: "Module/UserCard",
  component: UserCard,
} as Meta;

export const Primary = {
  args: {
    id: 1,
    avatar:
      "https://avatars.dicebear.com/v2/avataaars/{{Maxime_Nienow}}.svg?options[mood][]=happy",
    username: "John Doe",
  },
};
