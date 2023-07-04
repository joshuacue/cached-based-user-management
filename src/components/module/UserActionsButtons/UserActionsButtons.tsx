import React from "react";
import { HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { UserCardButton } from "../UserCardButton/UserCardButton";
import { UserCardDivider } from "../UserCardDivider/UserCardDivider";
import { UserActionsProps } from "@/utils/types";

const getButtonIconClass = (isDeleted: boolean, defaultClass: string) =>
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
      iconButtonClass: getButtonIconClass(isDeleted, "text-red-500"),
      onClick: onFavoriteClick,
      disabled: isDeleted,
      buttonWrapperClass: `rounded-bl-0.4`,
    },
    {
      Icon: PencilIcon,
      text: "edit",
      iconButtonClass: getButtonIconClass(isDeleted, "text-gray-4"),
      onClick: onEditClick,
      disabled: isDeleted,
      buttonWrapperClass: ``,
    },
    {
      Icon: TrashIcon,
      text: "delete",
      iconButtonClass: getButtonIconClass(isDeleted, "text-gray-4"),
      onClick: onDeleteClick,
      disabled: isDeleted,
      buttonWrapperClass: `rounded-br-0.4`,
    },
  ];

  return (
    <div
      data-testid="user-actions-buttons"
      className="border-t-0.2 bg-gray-2 ring-gray-1 flex justify-between rounded-b-0.4"
    >
      {userCardButtons?.map((button, index) => (
        <React.Fragment key={`${button.text}_${index}`}>
          <UserCardButton
            text={button.text}
            onClick={button.onClick}
            disabled={button.disabled}
            className={button.buttonWrapperClass}
          >
            <button.Icon className={button.iconButtonClass} />
          </UserCardButton>
          {index !== userCardButtons.length - 1 && (
            <UserCardDivider key={`divider_${index}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserActionsButtons;
