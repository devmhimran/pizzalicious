"use client";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import { usePathname, useRouter } from "next/navigation";

const layout = ({ children }) => {
  //   const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  return (
    <div
      className={`container mx-auto lg:grid grid-cols-3 lg:grid-cols-3 py-16 gap-16 px-4`}
    >
      <div className="hidden lg:block">
        <SettingsSidebar pathname={pathname} />
      </div>
      <div className="col-span-2 w-full">{children}</div>
    </div>
  );
};

export default layout;
