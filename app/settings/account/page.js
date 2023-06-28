"use client";
import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(router);
  return <div>Account</div>;
};

export default page;
