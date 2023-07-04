const getPizzas = (id) =>
  fetch(`https://api-creator-server.vercel.app/pizzalicious/pizzalicious/${id}`)
    .then((res) => res.json())
    .then((data) => data);

const { data: pizzaData, isLoading } = useQuery({
  queryKey: ["pizzas"],
  queryFn: getPizzas,
});

export default getPizzas;
