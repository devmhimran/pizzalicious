"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const router = useRouter();
  const navLink = [
    {
      navText: "Our Hot Deals 🔥",
      navLink: "/our-hot-deals",
    },
    // {
    //   navText: "My Orders",
    //   navLink: "/my-orders",
    // },
  ];
  return (
    <nav className="border-b">
      <div className="container mx-auto py-4 grid grid-cols-2 justify-between lg:px-0 px-4 relative ">
        <div className="flex items-center gap-12">
          <div className="logo">
            <Link className="" href="/">
              <img
                className=" inline-block"
                src="/assets/pizzalicious-logo.png"
                alt=""
              />{" "}
            </Link>
          </div>
          {/* <div className="lg:block hidden">
            <div className="search bg-[#EDEEF2] rounded-md flex justify-end items-center px-2.5">
              <input
                className="bg-[#EDEEF2] w-full py-2 outline-none rounded-md"
                placeholder="Search"
                type="text"
                name=""
                id=""
              />
              <CiSearch className="text-xl text-[#83859C]" />
            </div>
          </div> */}
        </div>

        <div className="flex justify-end items-center gap-6 lg">
          <span className="lg:block hidden">
            {navLink.map((data, index) => (
              <Link
                className="text-base font-bold hover:text-brandColor01 mx-3"
                key={index}
                href={data.navLink}
              >
                {data.navText}
              </Link>
            ))}
            |
          </span>

          <div className="cart bg-[#fff3f3] p-3 rounded-md relative">
            <p className="bg-brandColor01 text-xs py-0.5 px-1.5 text-white rounded-full absolute top-[-5px] right-[-5px]">
              4
            </p>
            <span>
              <LuShoppingBag className="text-xl text-brandColor01" />
            </span>
          </div>
          <div className="avatar">
            {/* <Image
            className="rounded-md focus:outline outline-offset-2 outline-1 outline-blue-500"
            width={40}
            height={40}
            src="/assets/pizzalicious-avatar-image.png"
            alt="avatar"
          /> */}
            <span
              className="cursor-pointer"
              onClick={() => setProfileDropDown(!profileDropDown)}
            >
              <img
                className="w-10 h-10 rounded-md "
                src="/assets/pizzalicious-avatar-image.png"
                alt=""
              />
            </span>
            <div
              className={`absolute w-40 right-20  lg:right-0 bg-brandColor01 z-10 rounded-md p-4 ${
                profileDropDown ? "" : "hidden"
              }`}
            >
              <Link
                className="block text-white font-bold text-base mb-2"
                href="/dashboard"
              >
                Account
              </Link>
              <hr className="my-2 " />

              <Link
                className="block text-white font-semibold text-base my-2"
                href="/account"
              >
                Profile
              </Link>
              <Link
                className="block text-white font-semibold my-2"
                href="/account/address"
              >
                Address
              </Link>
              {/* <Link
                className="block text-white font-semibold my-2"
                href="/account/orders"
              >
                Orders
              </Link> */}
              <Link
                className="block text-white font-semibold my-2"
                href="/account/security"
              >
                Security
              </Link>
              <hr className="my-2 " />
              <div className="block text-white font-bold mt-2">Sign out</div>
            </div>
          </div>
          <div className="mobile__menu block lg:hidden">
            <div className="flex gap-2 items-center">
              <span>|</span>
              <span
                className={`bg-[#EDEEF2] p-3 rounded-md ${
                  menuToggle ? "hidden" : ""
                }`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <RxHamburgerMenu
                  className={`text-xl text-[#83859C] ${
                    menuToggle ? "hidden" : ""
                  }`}
                />
              </span>
              <span
                className={`bg-[#EDEEF2] p-3 rounded-md ${
                  menuToggle ? "" : "hidden"
                }`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <RxCross2 className={`text-xl text-[#83859C] `} />
              </span>
            </div>
            <div
              className={`menu__content  absolute w-full left-0 bg-brandColor01 z-10 rounded-md p-4 ${
                menuToggle ? "" : "hidden"
              }`}
            >
              {navLink.map((data, index) => (
                <Link
                  className="text-base font-bold hover:text-brandColor01 block py-2 text-white"
                  key={index}
                  href={data.navLink}
                >
                  {data.navText}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
