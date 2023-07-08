const PizzaGridSkeleton = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 gap-5 lg:gap-8 px-4 lg:px-0">
      {Array(8)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="border rounded-md cursor-pointer bg-white animate-pulse"
          >
            <div className="w-full h-[150px] lg:h-[330px] bg-gray-300 mb-2 rounded-t-md"></div>
            <div className="pizza__detail p-4">
              <div className="w-6/12 h-5 bg-gray-300 mb-3 rounded-md"></div>
              <div className="flex items-center gap-1.5 my-1">
                <div className="w-[28%] h-4 bg-gray-300 rounded-md"></div>
                <div className="w-[28%] h-4 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PizzaGridSkeleton;
