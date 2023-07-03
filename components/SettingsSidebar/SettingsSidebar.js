import React from "react";
import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import { BsShield } from "react-icons/bs";
import styles from "./SettingSidebar.module.css";
import Link from "next/link";

const SettingsSidebar = ({ pathname }) => {
  const dashboardNavLink = [
    {
      navText: "Account",
      navSubText: "Personal information",
      navLink: "/settings",
      icon: AiOutlineUser,
    },
    {
      navText: "Address",
      navSubText: "Shipping addresses",
      navLink: "/settings/address",
      icon: PiMapPinLight,
    },
    {
      navText: "Orders",
      navSubText: "Check your orders",
      navLink: "/settings/orders",
      icon: AiOutlineCreditCard,
    },
    {
      navText: "Security",
      navSubText: "Password, 2FA",
      navLink: "/settings/security",
      icon: BsShield,
    },
  ];

  const nonActiveNav = "hover:bg-[#fff3f3] hover:border-brandColor01";

  return (
    <div className={`container mx-auto `}>
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        {dashboardNavLink.map((data, index) => (
          <>
            <Link key={index} href={data.navLink}>
              <div
                key={index}
                className={`flex items-center gap-3.5 mt-5 p-4 cursor-pointer
                border border-1 rounded-xl my-2 ${
                  pathname === data.navLink
                    ? styles.dashboard__active__nav +
                      " border-brandColor01 bg-[#fff3f3]"
                    : nonActiveNav
                } ${styles.dashboard__nav}`}
              >
                <span
                  className={`bg-[#EDEEF2] p-2 rounded-xl ${styles.dashboard__nav__container}`}
                >
                  <data.icon
                    className={`text-3xl text-[#83859C] ${styles.dashboard__nav__icon}`}
                  />
                </span>
                <div>
                  <p className="text-lg font-bold">{data.navText}</p>
                  <p>{data.navSubText}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default SettingsSidebar;
