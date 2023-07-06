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
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 relative">
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
          </span>

          <div className="cart bg-[#fff3f3] p-3 rounded-md relative">
            <p className="bg-brandColor01 text-xs py-0.5 px-1.5 text-white rounded-full absolute top-[-5px] right-[-5px]">
              4
            </p>
            <span>
              <LuShoppingBag className="text-xl text-brandColor01" />
            </span>
          </div>
          <Link href="/account">
            <div className="avatar">
              <img
                className="w-10 h-10 rounded-md "
                src="/assets/pizzalicious-avatar-image.png"
                alt=""
              />
            </div>
          </Link>
          <div className="mobile__menu block lg:hidden">
            <div className="flex gap-3 items-center">
              <span
                className={`bg-brandColor01 p-3 rounded-md ${
                  menuToggle ? "hidden" : ""
                }`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <RxHamburgerMenu
                  className={`text-xl text-white ${menuToggle ? "hidden" : ""}`}
                />
              </span>
              <span
                className={`bg-brandColor01 p-3 rounded-md ${
                  menuToggle ? "" : "hidden"
                }`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <RxCross2 className={`text-xl text-white `} />
              </span>
            </div>
            <div
              className={`menu__content absolute w-44 top-14 right-0 bg-brandColor01 z-10 rounded-md p-4  ${
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
              <Link href="/account">
                <div className="avatar">
                  <img
                    className="w-10 h-10 rounded-md "
                    src="/assets/pizzalicious-avatar-image.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
