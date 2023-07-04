"use-client";
import React, { useState } from "react";
import { UserType } from "@/utils/types";
import { PrimaryButton } from "@/components/base/button/PrimaryButton";
import UserForm from "../UserForm/UserForm";

export function EditUserForm(props: UserType) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={`absolute right-0  text-black text-`}>
      <PrimaryButton onClick={() => setShowForm(true)}>Edit</PrimaryButton>
      {showForm && (
        <UserForm defaultValues={props} onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default EditUserForm;
