import ProductCard from "../model/ProductCard";

const mockProducts = [
  { name: "Nấm đùi gà", price: 30000, image: "/nam.png", discount: 0 },
  { name: "Ớt hiểm", price: 15000, image: "/ot.png", discount: 0 },
  { name: "Gà ta", price: 300000, image: "/ga.png", discount: 5 },
  // ...
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockProducts.map((item, idx) => (
        <ProductCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ProductGrid;
