const ProductCard = ({ name, price, image, discount }) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white p-3 rounded shadow hover:shadow-md transition relative">
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-1 rounded">
          -{discount}%
        </div>
      )}
      <img src={image} alt={name} className="h-32 mx-auto mb-2" />
      <h4 className="text-center text-sm font-medium mb-1">{name}</h4>
      <p className="text-center text-green-600 font-semibold">
        {discount > 0 && (
          <span className="line-through text-gray-400 text-sm mr-1">
            {price.toLocaleString()}đ
          </span>
        )}
        {discountedPrice.toLocaleString()}đ
      </p>
      <button className="bg-green-600 text-white text-sm mt-2 w-full py-1 rounded hover:bg-green-700">
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
