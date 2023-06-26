"use client";

import { fonts } from "@/utlis/fonts/font";
import { RiEBike2Fill } from "react-icons/ri";
import { BsFillBagDashFill, BsSearch } from "react-icons/bs";
import { MdOutlineRamenDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

const Blob = () => {
  return (
    <div className="container mx-auto blob flex gap-4">
      <div className="delivery flex w-full gap-5 py-6">
        <div>
          <div className="p-4 shadow-xl rounded-full text-black">
            <RiEBike2Fill className="text-2xl" />
          </div>
        </div>
        <div>
          <p className={`text-2xl text-[#090907] mb-4 `}>Fast Delivery</p>
          <p className="text-base">
            {" "}
            Promise to deliver <br />
            within 30 mins
          </p>
        </div>
      </div>
      <div className="delivery flex w-full gap-5 py-6">
        <div>
          <div className="p-4 shadow-xl rounded-full text-black">
            <BsFillBagDashFill className="text-2xl" />
          </div>
        </div>
        <div>
          <p className={`text-2xl text-[#090907] mb-4 `}>Pick up</p>
          <p className="text-base">
            Pickup delivery ay <br />
            at your doorstep
          </p>
        </div>
      </div>
      <div className="delivery flex w-full gap-5 py-6">
        <div>
          <div className="p-4 shadow-xl rounded-full text-black">
            <MdOutlineRamenDining className="text-2xl" />
          </div>
        </div>
        <div>
          <p className={`text-2xl text-[#090907] mb-4 `}>Dine in</p>
          <p className="text-base">
            Enjoy your food <br />
            fresh crispy and hot
          </p>
        </div>
      </div>
      <div className="delivery flex w-full gap-5 py-6">
        <div>
          <div className="p-4 shadow-xl rounded-full text-black">
            <TbPaperBag className="text-2xl" />
          </div>
        </div>
        <div>
          <p className={`text-2xl text-[#090907] mb-4 `}>Takeout</p>
          <p className="text-base">
            Conveniently order your favorite <br />
            dishes and pick them up at the counter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blob;
