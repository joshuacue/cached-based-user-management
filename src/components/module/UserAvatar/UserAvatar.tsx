import React from "react";
import Image from "next/image";
import { UserAvatarProps } from "@/utils/types";

export function UserAvatar({ avatar, username }: UserAvatarProps) {
  return (
    <div className={`bg-gray-2 pt-2`}>
      <div className={`relative w-full h-[24em]`}>
        <Image
          src={avatar}
          alt={`${username}-avatar`}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
