"use client";

const ProductTable = ({ products }) => {
  //   let content;
  //   if (products.length && tabName) {
  //     content = products.filter((data) => data.status.toLowerCase() === tabName);
  //   }
  //   if (tabName === "all products") {
  //     content = products;
  //   }
  //   console.log(content);
  //   if (homeBlog.length && homePageFilter.filterCategory) {
  //     content = homeBlog
  //       .filter((data) => {
  //         if (data) {
  //           return data.blogCategory === homePageFilter.filterCategory;
  //         }
  //         return data;
  //       })
  //       .reverse()
  //       .map((data) => <HomeBlog key={data._id} data={data} />);
  //   }
  return (
    <div className="py-5">
      <table class="table-auto w-full border rounded-md">
        <thead className="border bg-gray-100">
          <tr className=" rounded-md text-black ">
            <th className="text-left p-2">Image</th>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Category</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr className="py-2 border-b" key={index}>
              <td className="p-2">
                <img
                  className="w-14 h-14 rounded-md"
                  src={product.image}
                  alt={product.name}
                />
              </td>
              <td>
                <p className="font-semibold">{product.name}</p>
              </td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <div className="flex items-center gap-3">
                  <p>{product.status}</p>
                  <div className="status flex items-center gap-1">
                    <div
                      className={`w-3 h-3 rounded-full  bg-red-600 ${
                        product.status.toLowerCase() === "sold"
                          ? "block"
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`w-3 h-3 rounded-full  bg-orange-500 ${
                        product.status.toLowerCase() === "out of stock"
                          ? "block"
                          : " hidden"
                      }`}
                    ></div>
                    <div
                      className={`w-3 h-3 rounded-full  bg-green-500 ${
                        product.status.toLowerCase() === "summer sale" ||
                        product.status.toLowerCase() === "new arrival"
                          ? "block"
                          : " hidden"
                      }`}
                    ></div>
                    <div
                      className={`w-3 h-3 rounded-full  bg-blue-500 ${
                        product.status.toLowerCase() === "upcoming"
                          ? "block"
                          : " hidden"
                      }`}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
