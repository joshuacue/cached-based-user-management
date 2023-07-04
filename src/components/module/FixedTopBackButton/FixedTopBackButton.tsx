"use client";
import Link from "next/link";
import { PrimaryButton } from "@/components/base/button/PrimaryButton";

export function FixedTopBackButton() {
  return (
    <Link
      href={`/users-list`}
      className={`absolute top-[-21em] md:top-[-26em] xl:top-[-30em] left-[-4em] mt-4 ml-4`}
    >
      <PrimaryButton>Back to list</PrimaryButton>
    </Link>
  );
}

export default FixedTopBackButton;
