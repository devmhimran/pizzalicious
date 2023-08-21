"use client";

import AccountSidebar from "@/components/AccountSidebar/AccountSidebar";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import { BsShield } from "react-icons/bs";
import AccountMobileSidebar from "@/components/AccountMobileSidebar/AccountMobileSidebar";

const layout = ({ children }) => {
  const dashboardNavLink = [
    {
      navText: "Account",
      navSubText: "Personal information",
      navLink: "/account",
      icon: AiOutlineUser,
    },
    {
      navText: "Address",
      navSubText: "Shipping addresses",
      navLink: "/account/address",
      icon: PiMapPinLight,
    },
    // {
    //   navText: "Orders",
    //   navSubText: "Check your orders",
    //   navLink: "/account/orders",
    //   icon: AiOutlineCreditCard,
    // },
    {
      navText: "Security",
      navSubText: "Password, 2FA",
      navLink: "/account/security",
      icon: BsShield,
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  return (
    <div className="bg-brand__bg__color">
      <div className="container mx-auto min-h-screen w-full block lg:flex gap-16 px-4 lg:px-20 py-6 lg:py-20 ">
        <div className="lg:hidden">
          <AccountMobileSidebar dashboardNavLink={dashboardNavLink} />
        </div>
        <div className="hidden lg:block w-[30%]">
          <AccountSidebar
            pathname={pathname}
            dashboardNavLink={dashboardNavLink}
          />
        </div>
        <div className="col-span-2 w-full container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default layout;
