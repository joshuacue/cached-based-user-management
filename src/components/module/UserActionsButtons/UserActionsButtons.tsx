import React from "react";
import { HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { UserCardButton } from "../UserCardButton/UserCardButton";
import { UserCardDivider } from "../UserCardDivider/UserCardDivider";
import { UserActionsProps } from "@/utils/types";

const getButtonClass = (isDeleted: boolean, defaultClass: string) =>
  `text-1 w-3 h-3 ${isDeleted ? "gray-1 cursor-not-allowed" : defaultClass}`;

export const UserActionsButtons = ({
  onFavoriteClick,
  onDeleteClick,
  isDeleted,
  isFavorite,
  onEditClick,
}: UserActionsProps) => {
  const userCardButtons = [
    {
      Icon: isFavorite ? HeartIconSolid : HeartIcon,
      text: "favorite",
      buttonClass: getButtonClass(isDeleted, "text-red-500"),
      onClick: onFavoriteClick,
      disabled: isDeleted,
    },
    {
      Icon: PencilIcon,
      text: "edit",
      buttonClass: getButtonClass(isDeleted, "text-gray-4"),
      onClick: onEditClick,
      disabled: isDeleted,
    },
    {
      Icon: TrashIcon,
      text: "delete",
      buttonClass: getButtonClass(isDeleted, "text-gray-4"),
      onClick: onDeleteClick,
      disabled: isDeleted,
    },
  ];

  return (
    <div
      data-testid="user-actions-buttons"
      className="border-t-0.2 bg-gray-2 ring-gray-1 flex justify-between"
    >
      {userCardButtons?.map((button, index) => (
        <React.Fragment key={`${button.text}_${index}`}>
          <UserCardButton
            text={button.text}
            onClick={button.onClick}
            disabled={button.disabled}
          >
            <button.Icon className={button.buttonClass} />
          </UserCardButton>
          {index !== userCardButtons.length - 1 && (
            <UserCardDivider key={`divider_${index}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
