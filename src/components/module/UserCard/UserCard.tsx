import React, { useState } from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { UserDetails } from "../UserDetails/UserDetails";
import { UserActionsButtons } from "../UserActionsButtons/UserActionsButtons";
import UserForm from "../UserForm/UserForm";
import { User, UserCardProps } from "@/utils/types";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useUpdateUser } from "@/hooks/user/useUpdateUser";
import { notifyError, notifySuccess } from "@/utils/helpers";

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
    updateUser,
    onDeleteConfirm,
  } = useUserCard(onDeleteClick);

  return (
    <div data-testid={`user-card`} className={`ring-gray-1 rounded-0.4 ring-2 ring-flex flex-col w-full`}>
      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={onDeleteConfirm}
        />
      )}
      {showEditModal && (
        <UserForm
          defaultValues={rest}
          onSubmit={updateUser}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      <UserAvatar avatar={avatar} username={username} />
      <UserDetails {...restDetails} />
      <UserActionsButtons
        isFavorite={isFavorite}
        isDeleted={isDeleted}
        onFavoriteClick={onFavoriteClick}
        onEditClick={() => setShowEditModal(true)}
        onDeleteClick={() => setShowDeleteModal(true)}
      />
    </div>
  );
}

function useUserCard(onDeleteClick: () => void) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { mutateAsync: updateUserMutation } = useUpdateUser();

  const updateUser = async (data: User) => {
    try {
      await updateUserMutation(data);
      notifySuccess("User updated successfully");
    } catch (err) {
      notifyError((err as Error).message);
    }
  };

  const onDeleteConfirm = () => {
    onDeleteClick();
    setShowDeleteModal(false);
  };

  return {
    showDeleteModal,
    showEditModal,
    setShowDeleteModal,
    setShowEditModal,
    updateUser,
    onDeleteConfirm,
  }
}
