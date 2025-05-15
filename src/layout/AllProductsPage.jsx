import ProductFilterSidebar from "../screen/ProductFilterSidebar";
import ProductGrid from "../screen/ProductGrid";
const AllProductsPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 mx-auto">
      <div className="flex justify-center md:w-1/4">
        <ProductFilterSidebar />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">
          Tất cả sản phẩm
        </h2>
        <ProductGrid />
      </div>
    </div>
  );
};
export default AllProductsPage;
