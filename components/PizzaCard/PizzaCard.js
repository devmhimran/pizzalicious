"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";

const PizzaCard = ({ data }) => {
  const { _id, name, description, sizes, image, ingredients } = data;
  const [smallPrice, setSmallPrice] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const findSmallPrice = () => {
      for (const size of sizes) {
        if (size.name === "Small") {
          setSmallPrice(size.price);
          break;
        }
      }
    };
    findSmallPrice();
  }, [data]);
  console.log(smallPrice);
  return (
    <div
      onClick={() => router.push(`/pizza/${_id}`)}
      className="text-black border rounded-2xl cursor-pointer"
    >
      <img className="rounded-t-2xl" src={image} alt={name} />
      <div className="pizza__detail p-4">
        <p className="font-bold text-lg">{name}</p>
        <div className="flex items-center gap-1.5 my-1">
          <BsClock className="text-brandColor05" />
          <p className="font-semibold text-sm text-brandColor05">30-40 min</p>
          <p className="font-semibold text-sm text-brandColor05">
            $ {smallPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
