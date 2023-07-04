import React, { PropsWithChildren } from "react";
import { UserCardProps } from "@/utils/types";
import { useRouter } from "next/navigation";

export function UserCardContainer({
  username,
  children,
}: PropsWithChildren & Pick<UserCardProps, "username">) {
  const { push } = useRouter();

  return (
    <div
      onClick={() => {
        push(`/users-list/${username}`, { shallow: true });
      }}
      data-testid={`user-card`}
      className={`relative ring-gray-1 rounded-0.4 ring-2 ring-flex flex-col w-full hover:scale-[1.01] transition duration-[100ms] hover:shadow-xl transform-gpu transform-user-card cursor-pointer bg-light`}
    >
      {children}
    </div>
  );
}

export default UserCardContainer;
