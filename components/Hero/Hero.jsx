"use client";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

import "swiper/css";

const Hero = () => {
  return (
    <div className="container mx-auto pt-5 lg:pt-14">
      <div className="block lg:flex items-center justify-between gap-5">
        <div className="offer__01 w-full my-4 lg:my-0">
          <img className="w-full" src="/assets/hero-deal-01.png" alt="" />
        </div>
        <div className="offer__01 w-full my-4 lg:my-0">
          <img className="w-full" src="/assets/hero-deal-02.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
