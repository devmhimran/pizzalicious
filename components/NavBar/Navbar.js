import Link from "next/link";
import React from "react";
// import pizzaliciousLogo from "public/assets/pizzalicious-logo.png";
// import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
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
    <nav className="">
      <div className="container mx-auto py-3 flex justify-between items-center px-4 rounded-lg mt-3">
        <div className="logo">
          <Link href="/">
            <h1>Logo</h1>
            {/* <img src="public/pizzalicious-logo.png" alt="" /> */}
          </Link>
        </div>
        <div className="nav__link">
          <div className="flex gap-8 items-center justify-between">
            {navLink.map((data, index) => (
              <Link
                className="text-base font-semibold hover:text-brand-color"
                key={index}
                href={data.navLink}
              >
                {data.navText}
              </Link>
            ))}
            <div>
              <AiOutlineSearch className="text-xl" />
            </div>
            <div>
              <BsCart2 className="text-xl" />
            </div>
            <div>
              <button className="px-4 py-2 bg-brand-color rounded-full uppercase text-blue text-base">
                sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
