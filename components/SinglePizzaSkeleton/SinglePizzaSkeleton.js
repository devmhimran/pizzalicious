const SinglePizzaSkeleton = () => {
  return (
    <div className="min-h-screen bg-brand__bg__color animate-pulse">
      <div className="w-full lg:w-8/12  mx-auto  grid grid-cols-1 lg:grid-cols-2 py-16 gap-6 lg:gap-9 px-4 lg:px-0">
        <div className="pizza__img">
          <div className="w-full h-[350px] lg:h-[450px] rounded-lg bg-gray-300"></div>
        </div>
        <div className="pizza__detail border rounded-md p-8 bg-white">
          <div className="w-full h-9 bg-gray-300 mb-6 rounded-md"></div>
          <div className="w-full h-5 bg-gray-300 mb-2 rounded-md"></div>
          <div className="w-7/12 h-5 bg-gray-300 mb-10 rounded-md"></div>
          <div className="w-5/12 h-7 bg-gray-300 mb-4 rounded-md "></div>
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="w-7/12 h-5 bg-gray-300 mb-2 rounded-md"
              ></div>
            ))}
          <div className="flex items-center gap-3 mt-4">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-2/12 h-9 bg-gray-300 mb-2 rounded-lg"
                ></div>
              ))}
            {/* <div className="w-2/12 h-9 bg-gray-300 mb-2 rounded-lg"></div>
            <div className="w-2/12 h-9 bg-gray-300 mb-2 rounded-lg"></div>
            <div className="w-2/12 h-9 bg-gray-300 mb-2 rounded-lg"></div> */}
          </div>
          <div className="w-3/12 h-9 bg-gray-300 my-2.5 rounded-lg"></div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-3/12 h-9 bg-gray-300 mb-2 rounded-lg"></div>
            <div className="w-3/12 h-9 bg-gray-300 mb-2 rounded-lg"></div>
          </div>

          <div className="cart__items flex items-center gap-6 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePizzaSkeleton;
