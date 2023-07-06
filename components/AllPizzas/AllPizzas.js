"use client";
import { useQuery } from "@tanstack/react-query";
import PizzaCard from "../PizzaCard/PizzaCard";
import PreLoader from "../PreLoader/PreLoader";
import PizzaGridSkeleton from "../PizzaGridSkeleton/PizzaGridSkeleton";

const AllPizzas = ({ page }) => {
  let content;
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

  if (isLoading) {
    return <PizzaGridSkeleton />;
  } else if (page === "home") {
    content = pizzaData
      .slice(0, 8)
      .map((data) => <PizzaCard key={data._id} data={data} />);
  } else {
    content = pizzaData.map((data) => <PizzaCard key={data._id} data={data} />);
  }

  console.log(pizzaData);

  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 gap-5 lg:gap-8 px-4 lg:px-0">
      {content}
    </div>
  );
};

export default AllPizzas;
