"use client";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import { usePathname, useRouter } from "next/navigation";

const layout = ({ children }) => {
  //   const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`container mx-auto grid grid-cols-3 py-16 gap-16`}>
      <SettingsSidebar pathname={pathname} />
      <div className="col-span-2">{children}</div>
    </div>
  );
};

export default layout;
