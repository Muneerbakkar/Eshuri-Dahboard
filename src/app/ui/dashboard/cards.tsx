import Image from "next/image";
import React from "react";

const Card = ({ image, name, role }: any) => {
  const profileImage = "/image13.svg";

  const options = [
    { label: "Profile", link: "/profile" },
    { label: "Settings", link: "/settings" },
    { label: "Logout", link: "/logout" },
  ];

  return (
    <>
      <Image
        className="w-[100%]"
        src={image}
        width={50}
        height={0}
        alt="Card Image"
      />
      <div className="text-start">
        <p className="text-gray-700 text-base sm:text-sm md:text-md">{name}</p>
        <p className=" font-medium text-base sm:text-sm md:text-md">{role}</p>
      </div>
    </>
  );
};

export default Card;
