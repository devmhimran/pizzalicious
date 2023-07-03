"use client";
import { useQuery } from "@tanstack/react-query";

const AllPizzas = ({ page }) => {
  const getPizzas = () =>
    fetch(
      "https://api-creator-server.vercel.app/pizzalicious/pizzalicious-data"
    )
      .then((res) => res.json())
      .then((data) => data);

  const { data: pizzaData, isLoading } = useQuery({
    queryKey: ["pizzas"],
    queryFn: getPizzas,
  });

  console.log(pizzaData);

  return <div>All Pizzas</div>;
};

export default AllPizzas;
