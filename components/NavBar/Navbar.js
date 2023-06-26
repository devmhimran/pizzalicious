"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const navLink = [
    {
      navText: "Our Hot Deals 🔥",
      navLink: "/our-pizzas",
    },
    {
      navText: "My Orders",
      navLink: "/my-orders",
    },
  ];
  return (
    <nav className="container mx-auto py-4 grid grid-cols-2 justify-between lg:px-0 px-4 relative">
      <div className="flex items-center gap-12">
        <div className="logo">
          <h1 className="text-2xl font-bold uppercase text-brandBlue">
            pizza <br />
            licious
          </h1>
        </div>
        <div className="lg:block hidden">
          <div className="search bg-[#EDEEF2] rounded-xl flex justify-end items-center px-2.5">
            <input
              className="bg-[#EDEEF2] w-full py-2 outline-none rounded-xl"
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
            <CiSearch className="text-xl text-[#83859C]" />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-5 lg">
        <span className="lg:block hidden">
          {navLink.map((data, index) => (
            <Link
              className="text-base font-bold hover:text-brandBlue"
              key={index}
              href={data.navLink}
            >
              {data.navText}
            </Link>
          ))}
        </span>
        {/* |
        <Link className="text-base font-bold hover:text-brandBlue" href="/">
          My Orders
        </Link> */}
        <div className="cart bg-[#F3F4FF] p-3 rounded-xl relative">
          <p className="bg-brandBlue text-xs py-0.5 px-1.5 text-white rounded-full absolute top-[-5px] right-[-5px]">
            4
          </p>
          <span>
            <LuShoppingBag className="text-xl text-brandBlue" />
          </span>
        </div>
        <div className="avatar">
          {/* <Image
            className="rounded-xl focus:outline outline-offset-2 outline-1 outline-blue-500"
            width={40}
            height={40}
            src="/assets/pizzalicious-avatar-image.png"
            alt="avatar"
          /> */}
          <img
            className="w-10 h-10 rounded-xl "
            src="/assets/pizzalicious-avatar-image.png"
            alt=""
          />
        </div>
        <div className="mobile__menu block lg:hidden">
          <div className="flex gap-2 items-center">
            <span>|</span>
            <span
              className={`bg-[#EDEEF2] p-3 rounded-xl ${
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
              className={`bg-[#EDEEF2] p-3 rounded-xl ${
                menuToggle ? "" : "hidden"
              }`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <RxCross2 className={`text-xl text-[#83859C] `} />
            </span>
          </div>
          <div
            className={`menu__content  absolute w-full left-0 bg-brandBlue rounded-xl p-4 ${
              menuToggle ? "" : "hidden"
            }`}
          >
            {navLink.map((data, index) => (
              <Link
                className="text-base font-bold hover:text-brandBlue block py-2 text-white"
                key={index}
                href={data.navLink}
              >
                {data.navText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
