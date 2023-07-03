import Link from "next/link";
import React from "react";

export interface IconTextProps {
  icon: React.ElementType;
  text: string;
  href?: string;
}

export const IconText: React.FC<IconTextProps> = ({
  icon: Icon,
  text,
  href,
}) => (
  <div className={`flex space-x-0.6`}>
    <Icon className={`text-1 w-2.2 h-2.2`} />
    {href ? (
      <a
        href={href}
        target={`_blank`}
        className={`flex text-center text-gray-3 text-1.6 hover:text-green-700`}
      >
        {text}
      </a>
    ) : (
      <span className={`flex text-center text-gray-3 text-1.6`}>{text}</span>
    )}
  </div>
);
