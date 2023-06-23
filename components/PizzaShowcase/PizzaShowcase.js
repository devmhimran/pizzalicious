const PizzaShowcase = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-2 gap-4">
        <div className="pr-48">
          <h2 className="text-4xl leading-snug font-bold">
            Delicious Pizzas <span className="text-[#F2552C]">Delivered</span>{" "}
            <br /> to Your <span className="text-[#469A6D]">Doorstep</span>
          </h2>
          <p className="my-3 text-lg font-semibold">
            Taste the Ultimate Pizza Experience Today!
          </p>
          <p className="leading-normal">
            Indulge in a mouthwatering selection of freshly made pizzas
            delivered straight to your home. Our wide variety of flavors,
            premium ingredients, and artisanal crusts will tantalize your taste
            buds and leave you craving for more. Experience the perfect balance
            of cheesy goodness, zesty sauces, and delightful toppings. Order now
            and savor the authentic flavors of our handcrafted pizzas.
            Satisfaction guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaShowcase;
