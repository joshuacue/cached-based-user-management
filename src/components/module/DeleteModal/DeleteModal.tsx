import React from "react";
import { SecondaryButton } from "@/components/base/button/SecondaryButton";
import { PrimaryButton } from "@/components/base/button/PrimaryButton";

export interface DeleteModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export function DeleteModal({ onCancel, onConfirm }: DeleteModalProps) {
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex overflow-hidden justify-center items-center px-2`}
    >
      <div
        className={`bg-white rounded-0.4 space-y-5 pt-4 pb-2 px-2 w-full max-w-[50em]`}
      >
        <p className={`text-2 text-center`}>
          Are you sure you want to delete this user?
        </p>
        <div className={`flex justify-end space-x-1`}>
          <PrimaryButton onClick={onCancel}>Cancel</PrimaryButton>
          {/* Delete button is the danger button so it is the red one */}
          <SecondaryButton onClick={onConfirm}>
            Yes, Delete User
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
