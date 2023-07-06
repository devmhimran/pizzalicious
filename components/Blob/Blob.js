"use client";

import { fonts } from "@/utlis/fonts/font";
import { RiEBike2Fill } from "react-icons/ri";
import { BsFillBagDashFill, BsSearch } from "react-icons/bs";
import { MdOutlineRamenDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

const Blob = () => {
  const blobContent = [
    {
      icon: RiEBike2Fill,
      heading: "Fast Delivery",
      description: (
        <>
          Promise to deliver <br />
          within 30 mins
        </>
      ),
    },
    {
      icon: BsFillBagDashFill,
      heading: "Pick up",
      description: (
        <>
          Pickup delivery <br />
          at your doorstep
        </>
      ),
    },
    {
      icon: MdOutlineRamenDining,
      heading: "Dine in",
      description: (
        <>
          Enjoy your food <br />
          fresh crispy and hot
        </>
      ),
    },
    {
      icon: TbPaperBag,
      heading: "Takeout",
      description: (
        <>
          Order your favorite dishes and <br />
          pick them up at the counter
        </>
      ),
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 pt-5 lg:pt-14">
      {blobContent.map((data, index) => (
        <div
          key={index}
          className="delivery w-full gap-5 p-6 bg-[#fff3f3] rounded-md"
        >
          <span className="rounded-lg bg-black p-3 w-6">
            <data.icon className="text-3xl  block" />
          </span>
          <div>
            <p className={`text-2xl text-[#090907] mb-2 font-semibold`}>
              {data.heading}
            </p>
            <p className="text-base">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blob;
