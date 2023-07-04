import { useState } from "react";

export function useUserCard(onDeleteClick: () => void) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const onDeleteConfirm = () => {
    onDeleteClick();
    setShowDeleteModal(false);
  };

  return {
    showDeleteModal,
    showEditModal,
    setShowDeleteModal,
    setShowEditModal,
    onDeleteConfirm,
  };
}
