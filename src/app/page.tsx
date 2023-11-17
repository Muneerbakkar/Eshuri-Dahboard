"use client";

import { Bell, ChevronRight, Menu, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "@/app/ui/dashboard/dropdown";
import Card from "@/app/ui/dashboard/cards";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const cards = [
    {
      image: "/image11.svg",
      name: "Amanda malela",
      role: "student",
    },
    {
      image: "/image12.svg",
      name: "Amanda malela",
      role: "student",
    },
    {
      image: "/image10.svg",
      name: "Amanda malela",
      role: "student",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex">
      <div className="flex">
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white text-black w-[35%] h-screen lg:hidden p-4 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out`}
        >
          <div className="h-screen flex flex-col">
            {/* Sidebar menu */}
            <ul className="py-20 text-gray-400 ">
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/home-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Home
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/sessions-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Sessions
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/wallet-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Wallet
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/progress-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Progress
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/mentees-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Mentees
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/learning-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Learning plans
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
            </ul>
            {/* Bottom options */}

            <div className="mt-auto text-gray-400 pb-5">
              <hr className="flex-grow " />
              <ul className="py-4">
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/Settings-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Settings
                  </div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/help-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Help & Getting Started
                  </div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/log-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Log Out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-screen  hidden lg:block sticky top-0 ">
          <div className="bg-white w-74 h-screen flex flex-col ml-2">
            <div className="p-4 flex">
              <Image
                src="/icon.svg"
                alt="Logo"
                width={50}
                height={0}
                className="mr-4"
              />
              <Image src="/logo.svg" alt="Logo" width={100} height={0} />
            </div>
            {/* Sidebar menu */}
            <ul className="py-4 text-gray-400">
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/home-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Home
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/sessions-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Sessions
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/wallet-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Wallet
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/progress-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Progress
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/mentees-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Mentees
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center justify-between">
                <div className="flex">
                  <Image
                    src="/learning-icon.svg"
                    alt="Logo"
                    width={20}
                    height={0}
                    className="mr-2"
                  />
                  Learning plans
                </div>
                <ChevronRight color="#6c63ff" />
              </li>
            </ul>

            {/* Bottom options */}
            <div className="mt-auto text-gray-400">
              <hr className="flex-grow mx-4" />
              <ul className="py-4">
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/settings-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Settings
                  </div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/help-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Help & Getting Started
                  </div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <div className="flex">
                    <Image
                      src="/log-icon.svg"
                      alt="Logo"
                      width={20}
                      height={0}
                      className="mr-2"
                    />
                    Log Out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <nav className="bg-white text-black p-4 sticky top-0 border-l-2 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <div
              className="text-3xl cursor-pointer lg:hidden "
              onClick={toggleSidebar}
            >
              <Menu color="#6c63ff" />
            </div>
            <div className="text-2xl font-semibold justify-start">
              <span className="lg:hidden">
                {" "}
                <ul className="md:hidden flex space-x-4 items-center">
                  <li className="hover:underline cursor-pointer ">
                    <MessageSquare color="#6c63ff" />
                  </li>
                  <li className="hover:underline">
                    <Bell color="#6c63ff" />
                  </li>
                  <li className="hover:underline">
                    <Dropdown />
                  </li>
                </ul>
              </span>
            </div>
            <ul className="hidden md:flex space-x-4 items-center">
              <li className="hover:underline cursor-pointer">
                <MessageSquare color="#6c63ff" />
              </li>
              <li className="hover:underline">
                <Bell color="#6c63ff" />
              </li>
              <li className="hover:underline">
                <Dropdown />
              </li>
            </ul>
          </div>
        </nav>

        <main className="p-4">
          <div className="heading text-3xl font-bold ml-2">Dashboard</div>
          <div className="md:flex">
            <div className="w-[100%]">
              <div
                className="card p-6 pb-4 border border-gray-300 rounded-lg shadow-md text-center m-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #6C63FF, #00AEFF)",
                }}
              >
                <div className="heading text-2xl font-medium mb-4 text-start">
                  Overview
                </div>
                <div className="percentage-bar flex w-full h-24 bg-gray-100 rounded-lg mb-4 p-2">
                  <div
                    className="percentage-fill h-full rounded-lg bg-indigo-100"
                    style={{ width: "40%" }}
                  >
                    <div className="flex justify-between p-2">
                      <p className="">youre done</p>
                      <p className="text-indigo-500">8%</p>
                    </div>

                    <p className="text-start px-2">
                      <span className="text-start text-2xl mr-2 font-bold">
                        129
                      </span>
                      Sessions
                    </p>
                  </div>
                  <div className="ml-60 mt-5 text-start flex">
                    <div>
                      <p>Time</p>
                      <p>
                        <span className="font-bold text-2xl mr-2">87h:47</span>
                        Min
                      </p>
                    </div>
                    <div className=" mt-[-5%] rounded-full bg-white  px-2  h-[40%]">
                      <p className="font-bold">3%</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph text-lg mb-4 text-start text-black">
                  Meet fellow mentors
                </p>
                <div className="image-container flex justify-between md:h-[20%] sm:h-[10%] ">
                  <div>
                    <Image
                      className=""
                      src="/image6.svg"
                      alt="Image 6"
                      width={70}
                      height={0}
                    />
                    <p className="font-medium">Andrew L.</p>
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/image7.svg"
                      alt="Image 7"
                      width={70}
                      height={0}
                    />
                    <p className="font-medium">Ray E.</p>
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/image8.svg"
                      alt="Image 8"
                      width={70}
                      height={0}
                    />
                    <p className="font-medium">Mariam M.</p>
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/image9.svg"
                      alt="Image 9"
                      width={70}
                      height={0}
                    />
                    <p className="font-medium">Olamide R.</p>
                  </div>
                  <div className="py-6">
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                {" "}
                <div className="text-xl font-normal text-black m-2">
                  Mentorship requests
                </div>
                <Link href="" className="mr-2" style={{ color: "#6c63ff" }}>
                  {" "}
                  see all
                </Link>
              </div>
              <div className="flex h-auto ">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="card w-[30%]  bg-white border border-gray-300 rounded-lg shadow-md text-center p-2 m-2"
                  >
                    <Card {...card} />
                  </div>
                ))}
                <button>
                  <ChevronRight size={48} color="#6c63ff" />
                </button>
              </div>
            </div>
            <div className="">
              <div className="border bg-white border-gray-300 w-[95%] rounded-lg shadow-md p-3 m-4 mt-2">
                <h1 className="text-xl font-semibold">Upcoming sessions</h1>
                <div className="flex mb-4">
                  <div>
                    <p className="text-gray-400">Confirm sessions</p>
                  </div>
                  <Link
                    href="#"
                    className="ml-auto text-blue-500"
                    style={{ color: "#6c63ff" }}
                  >
                    See all
                  </Link>
                </div>
                <div className="flex mt-2">
                  <Image
                    src="/image13.svg"
                    alt="Student Image"
                    width={0}
                    height={0}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Amanda M</h2>
                    <p className="text-gray-500">student</p>
                  </div>
                  <Link
                    href="#"
                    className="ml-auto text-blue-500"
                    style={{ color: "#6c63ff" }}
                  >
                    Details
                  </Link>
                </div>
                <hr className="my-4 border-gray-500" />
                <div className="flex mt-2">
                  <Image
                    src="/image13.svg"
                    alt="Student Image"
                    width={50}
                    height={0}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Amanda M</h2>
                    <p className="text-gray-500">student</p>
                  </div>
                  <Link
                    href="#"
                    className="ml-auto text-blue-500"
                    style={{ color: "#6c63ff" }}
                  >
                    Details
                  </Link>
                </div>
                <hr className="my-4 border-gray-500" />
                <div className="flex mt-2">
                  <Image
                    src="/image13.svg"
                    alt="Student Image"
                    width={50}
                    height={0}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Amanda M</h2>
                    <p className="text-gray-500">student</p>
                  </div>
                  <Link
                    href="#"
                    className="ml-auto text-blue-500"
                    style={{ color: "#6c63ff" }}
                  >
                    Details
                  </Link>
                </div>
                <hr className="my-4 border-gray-500" />
                <div className="flex mt-4">
                  <Image
                    src="/image13.svg"
                    alt="Student Image"
                    width={50}
                    height={0}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">Amanda M</h2>
                    <p className="text-gray-500">student</p>
                  </div>
                  <Link
                    href="#"
                    className="ml-auto text-blue-500"
                    style={{ color: "#6c63ff" }}
                  >
                    Details
                  </Link>
                </div>
                <hr className="my-4 border-gray-500" />
                <div className="text-center">
                  <button className="text-white px-14 py-2 ">View all</button>
                </div>
              </div>

              <div className="bg-white w-[95%] shadow-md rounded-lg p-4 text-center m-4">
                <h2 className="text-xl font-semibold">Review</h2>
                <hr className="my-2" />
                <p className="text-gray-400 text-start">
                  tell the mentee how he can improve his future sessions with as
                  much detail as possible.
                </p>
                <button
                  className="bg-white  px-4 py-2 mt-4 rounded-md border border-blue "
                  style={{ color: "#6c63ff" }}
                >
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
