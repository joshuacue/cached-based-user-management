import { toast } from "react-toastify";
import { UserType, UserFormValueTypes } from "./types";

const toastOptions = Object.freeze({
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  className: "text-1.6",
  containerClassName: "max-w-[20em]",
});

export function notifyError(message: string) {
  toast.error(message, toastOptions);
}

export function notifySuccess(message: string) {
  toast.success(message, toastOptions);
}

export function mapUserFormStateToUser(
  id: number,
  formState: UserFormValueTypes,
): UserType {
  return {
    id,
    name: formState.name,
    username: formState.username,
    email: formState.email,
    address: {
      street: formState.street,
      suite: formState.suite,
      city: formState.city,
      zipcode: formState.zipcode,
      geo: {
        lat: formState.lat,
        lng: formState.lng,
      },
    },
    phone: formState.phone,
    website: formState.website,
    company: {
      name: formState.companyName,
      catchPhrase: formState.catchPhrase,
      bs: formState.bs,
    },
  };
}

export function mapUserToUserFormState(user: UserType): UserFormValueTypes {
  return {
    name: user.name,
    username: user.username,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
    zipcode: user.address.zipcode,
    lat: user.address.geo.lat,
    lng: user.address.geo.lng,
    phone: user.phone,
    website: user.website,
    companyName: user.company.name,
    catchPhrase: user.company.catchPhrase,
    bs: user.company.bs,
  };
}
