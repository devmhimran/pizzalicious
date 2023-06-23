"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navLink = [
    {
      navText: "Home",
      navLink: "/",
    },
    {
      navText: "Menus",
      navLink: "/menus",
    },
    {
      navText: "Our Pizzas",
      navLink: "/our-pizzas",
    },
  ];
  return (
    <nav className="bg-[#23212C]">
      <div className="container mx-auto flex justify-between items-center bg-[#23212C] py-5 px-6 rounded-b-2xl relative">
        <div className="logo">
          <Link href="/">
            <h1 className="text-white">Logo</h1>
            {/* <img src="public/pizzalicious-logo.png" alt="" /> */}
          </Link>
        </div>
        <div className="nav__link">
          <div className="flex gap-8 items-center justify-between">
            {navLink.map((data, index) => (
              <Link
                className="text-base 
                font-semibold 
                text-white
                hover:text-brand-color"
                key={index}
                href={data.navLink}
              >
                {data.navText}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              className="w-12 rounded-full"
              src="/assets/pizzalicious-avatar-image.png"
              alt=""
            />
            <div
              className="profile"
              onClick={() => setProfileDropDown(!profileDropDown)}
            >
              <div className="name hover:underline flex items-center hover:decoration-white cursor-pointer">
                <p className="text-base text-white font-semibold">John Doe</p>
                <span>
                  <BiChevronDown className="text-xl text-white" />
                </span>
              </div>
            </div>
            {profileDropDown && (
              <div className="profile__dropdown absolute bg-[#469A6D] text-white px-3 py-1 w-40 right-0 rounded-lg top-[68px]">
                <Link className="block my-2" href="#">
                  Profile
                </Link>
                <Link className="block my-2" href="#">
                  Setting
                </Link>
                <hr />
                <Link className="block my-2" href="#">
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
