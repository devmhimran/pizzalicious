"use client";

import Footer from "@/components/Footer/Footer";
import PreLoader from "@/components/PreLoader/PreLoader";
import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import SinglePizzaSkeleton from "@/components/SinglePizzaSkeleton/SinglePizzaSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [smallPrice, setSmallPrice] = useState(null);
  const getPizzaData = () =>
    fetch(
      `https://api-creator-server.vercel.app/pizzalicious/pizzalicious/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => data);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: pizzaData, isLoading } = useQuery({
    queryKey: ["pizzas-single-data"],
    queryFn: getPizzaData,
  });

  if (isLoading) {
    return <SinglePizzaSkeleton />;
  }

  return (
    <div>
      <div className="min-h-screen bg-brand__bg__color">
        <div className="w-full lg:w-8/12  mx-auto  grid grid-cols-1 lg:grid-cols-2 py-16 gap-6 lg:gap-9 px-4 lg:px-0">
          <div className="pizza__img">
            <img className="w-full rounded-lg" src={pizzaData?.image} alt="" />
          </div>
          <div className="pizza__detail border rounded-md p-8 bg-white">
            <h1 className="text-4xl font-bold mb-8">{pizzaData?.name}</h1>
            <p className="text-lg text-brandColor04 font-normal">
              {pizzaData?.description}
            </p>
            <p className="text-2xl font-bold my-6">Ingredients</p>
            <ul>
              {pizzaData?.ingredients.map((data, index) => (
                <li
                  className="text-lg my-1.5 text-brandColor04 font-normal"
                  key={index}
                >
                  - {data}
                </li>
              ))}
            </ul>
            <div className="prices my-6">
              <div className="sizes flex items-center">
                <p className="font-semibold">Sizes: </p>
                {pizzaData?.sizes.map((size) => (
                  <>
                    <button
                      className="py-1.5 px-2 bg-[#fff3f3] text-xs lg:text-sm border border-brandColor01 
                    text-brandColor01 rounded-md font-normal mx-1  hover:bg-brandColor01 hover:text-white"
                    >
                      {size.name}
                    </button>
                  </>
                ))}
              </div>
              <div className="price my-5">
                <p className="font-semibold">
                  Price: <span className="text-2xl"> $ </span>
                  <span className="text-5xl font-bold">30</span>
                </p>
              </div>
            </div>
            <div className="cart__items flex items-center gap-6 mt-6">
              <div className="w-20">
                <PrimaryInput type="number" defaultValue="1" />
              </div>
              <div className="cart__btn">
                <button className="bg-brandColor01 px-5 py-3 rounded-md text-white font-normal">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
