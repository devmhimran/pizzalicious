import { fonts } from "@/utlis/fonts/font";
import { RiEBike2Fill } from "react-icons/ri";
import { BsFillBagDashFill, BsSearch } from "react-icons/bs";
import { MdOutlineRamenDining } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex items-center justify-between">
        <div className="title">
          <h1
            className={`text-[86px] leading-tight text-[#090907] ${fonts.dm_serif_text.className}`}
          >
            Fastest <br /> <span className="text-[#F2552C]">Delivery</span> &{" "}
            <br /> Easy <span className="text-[#F2552C]">Pickup</span>
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
            className="w-[600px]"
            src="/assets/pizzalicious-hero-image.png"
            alt=""
          />
        </div>
        <div className="blob">
          <div className="delivery flex gap-5 py-6">
            <div>
              <div className="p-4 shadow-xl rounded-full text-black">
                <RiEBike2Fill className="text-2xl" />
              </div>
            </div>
            <div>
              <p
                className={`text-2xl text-[#090907] mb-4 ${fonts.dm_serif_text.className}`}
              >
                Fast Delivery
              </p>
              <p className="text-base">
                {" "}
                Promise to deliver <br />
                within 30 mins
              </p>
            </div>
          </div>
          <div className="delivery flex gap-5 py-6">
            <div>
              <div className="p-4 shadow-xl rounded-full text-black">
                <BsFillBagDashFill className="text-2xl" />
              </div>
            </div>
            <div>
              <p
                className={`text-2xl text-[#090907] mb-4 ${fonts.dm_serif_text.className}`}
              >
                Pick up
              </p>
              <p className="text-base">
                Pickup delivery ay <br />
                at your doorstep
              </p>
            </div>
          </div>
          <div className="delivery flex gap-5 py-6">
            <div>
              <div className="p-4 shadow-xl rounded-full text-black">
                <MdOutlineRamenDining className="text-2xl" />
              </div>
            </div>
            <div>
              <p
                className={`text-2xl text-[#090907] mb-4 ${fonts.dm_serif_text.className}`}
              >
                Dine in
              </p>
              <p className="text-base">
                Enjoy your food <br />
                fresh crispy and hot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
