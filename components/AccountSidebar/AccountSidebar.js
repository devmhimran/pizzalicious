import React from "react";

import styles from "./AccountSidebar.module.css";
import Link from "next/link";

const AccountSidebar = ({ pathname, dashboardNavLink }) => {
  const nonActiveNav = "hover:bg-[#fff3f3] hover:border-brandColor01";

  return (
    <div className={`h-2/5 bg-white rounded-md border p-5`}>
      <div>
        {dashboardNavLink.map((data, index) => (
          <>
            <Link key={index} href={data.navLink}>
              <div
                className={`flex items-center gap-3.5 cursor-pointer my-3 p-2 rounded-md ${
                  pathname === data.navLink
                    ? styles.dashboard__active__nav +
                      " border-brandColor01 bg-[#fff3f3]"
                    : nonActiveNav
                } ${styles.dashboard__nav}`}
              >
                <span
                  className={`bg-[#EDEEF2] p-2 rounded-md ${styles.dashboard__nav__container}`}
                >
                  <data.icon
                    className={`text-xl text-[#83859C] ${styles.dashboard__nav__icon}`}
                  />
                </span>
                <div>
                  <p className="text-lg font-semibold">{data.navText}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
      {/* <div>
        {dashboardNavLink.map((data, index) => (
          <>
            <Link key={index} href={data.navLink}>
              <div
                className={`flex items-center gap-3.5 mt-5 p-4 cursor-pointer
                border border-1 rounded-md my-2 ${
                  pathname === data.navLink
                    ? styles.dashboard__active__nav +
                      " border-brandColor01 bg-[#fff3f3]"
                    : nonActiveNav
                } ${styles.dashboard__nav}`}
              >
                <span
                  className={`bg-[#EDEEF2] p-2 rounded-md ${styles.dashboard__nav__container}`}
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
      </div> */}
    </div>
  );
};

export default AccountSidebar;
