import React from "react";
import { SecondaryButton } from "@/components/base/button/SecondaryButton";
import { PrimaryButton } from "@/components/base/button/PrimaryButton";

export interface FormButtonsProps {
  /**
   * close the modal
   * @returns void
   */
  onCancel: () => void;
}

export function FormButtons({ onCancel }: FormButtonsProps) {
  return (
    <div className="w-full flex justify-end space-x-1 px-2">
      <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </div>
  );
}
