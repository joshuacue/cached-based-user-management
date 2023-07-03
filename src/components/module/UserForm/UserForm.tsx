import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import resolver from "../../../hooks/user/useSchema";
import { InputField } from "../../base/input-field/InputField";
import { User, UserFormValueTypes } from "@/utils/types";
import { fields } from "@/utils/constants";
import {
  mapUserFormStateToUser,
  mapUserToUserFormState,
} from "@/utils/helpers";
import { FormContainer } from "./FormContainer";
import { FormButtons, FormButtonsProps } from "./FormButtons";

export interface UserFormProps {
  /**
   * default values for the form
   * @default user item from users list queried from the endpoint
   */
  defaultValues: User;
  /**
   * @param user User object with the updated values
   * @returns void
   */
  onSubmit: (user: User) => void;
  /**
   * close the modal
   * @returns void
   */
  onCancel: FormButtonsProps["onCancel"];
}

export default function UserForm({
  defaultValues,
  onSubmit,
  onCancel,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValueTypes>({
    resolver,
    defaultValues: mapUserToUserFormState(defaultValues),
    shouldFocusError: true,
  });

  const onFormSubmit = (data: UserFormValueTypes) => {
    onSubmit(mapUserFormStateToUser(defaultValues.id, data));
    onCancel();
  };

  useEffect(() => {
    //disable body scroll on mount of this fullscreen component
    const body = document.body;
    if (body) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.removeProperty("overflow");
    };
  }, []);

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onFormSubmit)();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      {fields?.map((field) => (
        <div key={field.placeholder} className="w-full lg:w-1/2 px-2">
          <InputField
            hasError={Boolean(errors[field.name])}
            label={field.placeholder}
            {...register(field.name as keyof UserFormValueTypes)}
            placeholder={field.placeholder}
            onKeyDown={onEnterPress}
          />
        </div>
      ))}
      <FormButtons onCancel={onCancel} />
    </FormContainer>
  );
}
