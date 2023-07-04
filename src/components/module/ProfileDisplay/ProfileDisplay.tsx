"use-client";
import { RootState } from "@/redux/store";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSelector } from "react-redux";

interface ProfileDisplayProps {
  username: string;
  name: string;
  companyName: string;
  id: number;
}

export const ProfileDisplay = ({
  username,
  name,
  companyName,
  id,
}: ProfileDisplayProps) => {
  const deletedUsers = useSelector(
    (state: RootState) => state.user.deletedUsersList,
  );

  return (
    <div className={`flex flex-col items-center relative bottom-[10em]`}>
      <div
        className={`relative bg-gray-400 rounded-full h-[15em] w-[15em] md:w-[20em] md:h-[20em] shadow-xl mb-2`}
      >
        <Image
          src={`https://avatars.dicebear.com/v2/avataaars/{{${username}}}.svg?options[mood][]=happy`}
          alt={name}
          fill={true}
          className={`rounded-full`}
        />
      </div>
      <p className={`text-2.4 text-center`}>{name}</p>
      <p className={`text-1.8 text-center`}>{companyName}</p>
      {deletedUsers.includes(id) && (
        <div className={`flex text-center text-red-500 items-center`}>
          <ExclamationTriangleIcon className={`text-1 w-2 h-2 `} />
          <span className={`text-1.6 lg:text-2 text-bold`}>
            This user has been Deleted
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;
