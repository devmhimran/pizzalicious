"use client";
import PreLoader from "@/components/PreLoader/PreLoader";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductTable from "@/components/ProductTable/ProductTable";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const [tabName, setTabName] = useState("all products");
  const [selectedOption, setSelectedOption] = useState("all products");
  let content;
  const productStatus = [
    "new arrival",
    "summer sale",
    "sold",
    "out of stock",
    "upcoming",
  ];

  const getProduct = () =>
    fetch(
      "https://raw.githubusercontent.com/devmhimran/dummy-api/main/Helmet-Api/data.json"
    )
      .then((res) => res.json())
      .then((data) => data);

  const { data: products, isLoading } = useQuery({
    queryKey: ["task-product"],
    queryFn: getProduct,
  });

  if (isLoading) {
    return <PreLoader />;
  }

  if (products.length && tabName) {
    content = products.filter((data) => data.status.toLowerCase() === tabName);
  }
  if (tabName === "all products") {
    content = products;
  }
  const handleOptionChange = (e) => {
    setTabName(e.target.value);
    console.log(e.target.value);
  };
  console.log(selectedOption);

  return (
    <div className="bg-brand__bg__color">
      <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
        <div className="hidden lg:block heading__tab mb-3 lg:mb-5">
          <button
            className={`capitalize mx-2 px-4 py-2 text-sm lg:text-base font-semibold ${
              "all products" === tabName
                ? "border-b-2 border-black bg-gray-100"
                : "border-b"
            }`}
            onClick={() => setTabName("all products")}
          >
            All Products
          </button>
          {productStatus.map((status) => (
            <>
              <button
                className={`capitalize mx-2 px-4 py-2 text-sm lg:text-base font-semibold ${
                  status === tabName
                    ? "border-b-2 border-black bg-gray-100"
                    : "border-b"
                }`}
                onClick={() => setTabName(status)}
              >
                {status}
              </button>
            </>
          ))}
        </div>
        <div className="block lg:hidden">
          <select
            className="w-full border capitalize p-3 rounded-md outline-none"
            defaultValue={selectedOption}
            onChange={handleOptionChange}
          >
            <option className="capitalize" value="all products">
              All Products
            </option>
            {productStatus.map((status) => (
              <>
                <option className="capitalize" value={status}>
                  {status}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="table__tab">
          <div className="hidden lg:block">
            <ProductTable products={content} />
          </div>
          <div className="lg:hidden block">
            <ProductCard products={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
