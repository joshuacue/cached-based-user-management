import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * User schema for validation
 * @see UserForm component
 */
const userSchema = z.object({
  name: z.string().nonempty("Name is required"),
  username: z.string().nonempty("Username is required"),
  email: z.string().email().nonempty("Email is required"),
  street: z.string().nonempty("Street is required"),
  suite: z.string().nonempty("Suite is required"),
  city: z.string().nonempty("City is required"),
  zipcode: z.string().nonempty("Zipcode is required"),
  lat: z.string().nonempty("Latitude is required"),
  lng: z.string().nonempty("Longitude is required"),
  phone: z.string().nonempty("Phone number is required"),
  //should be string but the api returns without https:// or http on the website field
  website: z.string().nonempty("Website is required"),
  companyName: z.string().nonempty("Company name is required"),
  catchPhrase: z.string().nonempty("Catch phrase is required"),
  bs: z.string().nonempty("BS is required"),
});

export default zodResolver(userSchema);
