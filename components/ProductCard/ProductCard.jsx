const ProductCard = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-5">
      {products.map((product) => (
        <>
          <div className="border bg-white rounded-md relative">
            <img className="w-full" src={product.image} alt="" />
            <div className="px-3.5 py-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <h3 className="font-bold text-lg my-2">{product.price}</h3>
              <div className="flex items-center justify-between">
                <span className="py-1 px-2 border rounded-md">
                  <h3 className="text-base">{product.category}</h3>
                </span>
                <span className="py-1 px-2 border rounded-md absolute top-5 right-5 bg-brandColor01 text-white">
                  <h3 className="text-base">{product.status}</h3>
                </span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductCard;
