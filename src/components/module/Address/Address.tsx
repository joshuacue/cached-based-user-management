"use-client";
import { AddressType } from "@/utils/types";

export function Address(props: Partial<AddressType>) {
  return (
    <div className="grid grid-cols-2 py-0.5">
      <strong className="text-1.2 font-bold text-gray-800">Address</strong>
      <address className="font-normal not-italic text-1.4">
        {Object.values(props).map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </address>
    </div>
  );
}

export default Address;
