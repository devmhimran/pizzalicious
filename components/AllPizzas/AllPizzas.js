"use client";
import { useQuery } from "@tanstack/react-query";
import PizzaCard from "../PizzaCard/PizzaCard";
import PreLoader from "../PreLoader/PreLoader";

const AllPizzas = ({ page }) => {
  console.log(page);
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
    return <PreLoader />;
  } else if (page === "home") {
    content = pizzaData
      .slice(0, 8)
      .map((data) => <PizzaCard key={data._id} data={data} />);
  } else {
    content = pizzaData.map((data) => <PizzaCard key={data._id} data={data} />);
  }

  console.log(pizzaData);

  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 gap-6 lg:gap-10 px-4">
      {content}
    </div>
  );
};

export default AllPizzas;
