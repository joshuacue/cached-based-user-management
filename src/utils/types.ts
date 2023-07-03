export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type UserWithAvatar = User & {
  avatar: string;
};

// Define the type for the array of users
export type Users = UserWithAvatar[];

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

export interface UserCardProps extends User {
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
