"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const profileImage = "/image13.svg";

  const options = [
    { label: "Profile", link: "/profile" },
    { label: "Settings", link: "/settings" },
    { label: "Logout", link: "/logout" },
  ];


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleButtonClick}
        >
          <Image
            className="w-8 h-8 rounded-full"
            src={profileImage}
            alt="Profile"
            width={50}
            height={0}
          />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option: any) => (
              <Link
                key={option.label}
                href={option.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
