export type GeoType = {
  lat: string;
  lng: string;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type AddressWithGeoType = AddressType & {
  geo: GeoType;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressWithGeoType;
  phone: string;
  website: string;
  company: CompanyType;
};

export type UserWithAvatar = UserType & {
  avatar: string;
};

// Define the type for the array of users
export type UserListType = UserWithAvatar[];

export type UserFormValueTypes = {
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;
  phone: string;
  website: string;
  companyName: string;
  catchPhrase: string;
  bs: string;
};

export interface FieldType {
  name: keyof UserFormValueTypes;
  placeholder: string;
}

export interface UserCardProps extends UserType {
  avatar: string;
  /**
   * on heart icon click event
   */
  onFavoriteClick: () => void;
  /**
   * on trash icon click event
   */
  onDeleteClick: () => void;
  /**
   * is card marked as favorite
   */
  isFavorite: boolean;
  /**
   * is card added to deleted list
   */
  isDeleted: boolean;
}
export type UserActionsProps = Pick<
  UserCardProps,
  "onFavoriteClick" | "onDeleteClick" | "isDeleted" | "isFavorite"
> & { onEditClick: () => void };

export type UserAvatarProps = Pick<UserCardProps, "avatar" | "username">;

export type UserCardDetailsProps = Pick<
  UserCardProps,
  "name" | "email" | "phone" | "website"
>;
