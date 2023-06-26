"use client";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

import "swiper/css";

const Hero = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex items-center justify-between">
        <div className="title w-9/12">
          <h1
            className={`text-[96px] leading-[115px] font-extrabold text-[#090907]`}
          >
            Fastest <br />
            <span className="text-[#F2552C]">Delivery</span> & <br />
            Easy <span className="text-[#F2552C]">Pickup</span>
          </h1>
          <div className="flex items-center gap-2 my-8">
            <img
              className="w-16 rounded-full"
              src="/assets/pizzalicious-hero-avatar-image.png"
              alt=""
            />
            <p className="font-semibold text-base">
              When you are too lazy to cook, <br /> we are just a click away!
            </p>
          </div>
          <div className="search__btn mt-9">
            <Link
              className="bg-[#469A6D] px-6 py-4  text-white rounded-full shadow-xl"
              href="#"
            >
              <BsSearch className="inline mr-2 mb-1" />
              Find Best Pizzas
            </Link>
          </div>
        </div>
        <div className="hero__image">
          <img
            className="w-10/12 ml-auto"
            src="/assets/pizzalicious-hero-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
