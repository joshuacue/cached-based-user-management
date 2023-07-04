import React, { useState } from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { UserDetails } from "../UserDetails/UserDetails";
import { UserActionsButtons } from "../UserActionsButtons/UserActionsButtons";
import UserForm from "../UserForm/UserForm";
import { UserCardProps } from "@/utils/types";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useUserCard } from "@/hooks/user/useUserCard";
import { UserCardContainer } from "./UserCardContainer";

export function UserCard(props: UserCardProps) {
  const {
    isFavorite,
    isDeleted,
    onFavoriteClick,
    onDeleteClick,
    avatar,
    ...rest
  } = props;
  const { username, ...restDetails } = rest;
  const {
    showDeleteModal,
    showEditModal,
    setShowDeleteModal,
    setShowEditModal,
    onDeleteConfirm,
  } = useUserCard(onDeleteClick);

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={onDeleteConfirm}
        />
      )}
      {showEditModal && (
        <UserForm
          defaultValues={rest}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      <UserCardContainer username={username}>
        <UserAvatar avatar={avatar} username={username} />
        <UserDetails {...restDetails} />
        <UserActionsButtons
          isFavorite={isFavorite}
          isDeleted={isDeleted}
          onFavoriteClick={onFavoriteClick}
          onEditClick={() => setShowEditModal(true)}
          onDeleteClick={() => setShowDeleteModal(true)}
        />
      </UserCardContainer>
    </>
  );
}

export default UserCard;
