"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
const PizzaShowcase = () => {
  return (
    <div className="container mx-auto py-24">
      {/* <div className="grid grid-cols-2 gap-4">
        <div className="pr-48">
          <h2 className="text-4xl leading-snug font-bold">
            Delicious Pizzas <span className="text-[#F2552C]">Delivered</span>{" "}
            <br /> to Your <span className="text-[#469A6D]">Doorstep</span>
          </h2>
          <p className="my-3 text-lg font-semibold">
            Taste the Ultimate Pizza Experience Today!
          </p>
          <p className="leading-normal text-gray-500">
            Indulge in a mouthwatering selection of freshly made pizzas
            delivered straight to your home. Our wide variety of flavors,
            premium ingredients, and artisanal crusts will tantalize your taste
            buds and leave you craving for more. Experience the perfect balance
            of cheesy goodness, zesty sauces, and delightful toppings. Order now
            and savor the authentic flavors of our handcrafted pizzas.
            Satisfaction guaranteed
          </p>
        </div>
      </div> */}

      <div className="w-[450px] absolute top-[11%] left-[34%]">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="">
            <div>
              <img src="/assets/pizzas/image-5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img src="/assets/pizzas/image-2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img src="/assets/pizzas/image-3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img src="/assets/pizzas/image-4.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PizzaShowcase;
