"use client";

import PreLoader from "@/components/PreLoader/PreLoader";
import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  console.log(params);

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
    return <PreLoader />;
  }

  return (
    <div className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2 py-16 gap-6 lg:gap-10 px-4">
      <div className="pizza__img">
        <img className="w-11/12 rounded-xl" src={pizzaData.image} alt="" />
      </div>
      <div className="pizza__detail">
        <h1 className="text-5xl font-bold mb-8">{pizzaData.name}</h1>
        <p className="text-lg text-brandColor04 font-semibold">
          {pizzaData.description}
        </p>
        <p className="text-2xl font-bold my-6">Ingredients</p>
        <ol>
          {pizzaData.ingredients.map((data, index) => (
            <li
              className="list-disc text-lg text-brandColor04 font-semibold"
              key={index}
            >
              {data}
            </li>
          ))}
        </ol>
        <div className="cart__items flex items-center gap-6 mt-6">
          <div className="w-20">
            <PrimaryInput type="number" defaultValue="1" />
          </div>
          <div className="cart__btn">
            <button className="bg-brandColor01 px-5 py-3 rounded-xl text-white font-semibold">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
