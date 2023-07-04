"use-client";
import { LinkItem } from "../LinkItem/LinkItem";

interface DetailItemProps {
  label: string;
  value: string;
  isLink?: boolean;
}

export const DetailItem = ({
  label,
  value,
  isLink = false,
}: DetailItemProps) => (
  <div className="grid grid-cols-2 py-0.5">
    <strong className="text-1.2 break-words font-bold text-gray-800">
      {label}
    </strong>
    {isLink ? (
      <LinkItem href={`https://${value}`} value={value} />
    ) : (
      <span className="text-1.4 break-words" aria-live="assertive">
        {value}
      </span>
    )}
  </div>
);

export default DetailItem;
