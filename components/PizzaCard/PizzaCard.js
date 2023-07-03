import React from "react";

const PizzaCard = ({ data }) => {
  const { _id, name, description, sizes, image, ingredients } = data;

  console.log(name);
  return <div className="p-4 bg-red-500 text-black">{name} </div>;
};

export default PizzaCard;
