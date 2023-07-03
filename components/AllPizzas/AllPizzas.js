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

  if (page === "home") {
    if (!isLoading) {
      content = pizzaData
        .slice(0, 6)
        .map((data) => <PizzaCard key={data._id} data={data} />);
    }
  } else {
    if (!isLoading) {
      content = pizzaData.map((data) => (
        <PizzaCard key={data._id} data={data} />
      ));
    }
  }
  if (isLoading) {
    return <PreLoader />;
  }
  console.log(pizzaData);

  return (
    <div className="container mx-auto lg:grid grid-cols-3 lg:grid-cols-3 py-16 gap-16 px-4">
      {pizzaData.map((data) => (
        <PizzaCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default AllPizzas;
