"use-client";
import Image from "next/image";

export function Banner() {
  return (
    <div
      className={`relative h-[15em] md:h-[20em] xl:h-[24em] w-full object-cover`}
    >
      <Image
        src={`/cover.jpeg`}
        alt={`Banner`}
        fill={true}
        className={`object-cover`}
      />
    </div>
  );
}

export default Banner;
