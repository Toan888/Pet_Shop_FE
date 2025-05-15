const ProductFilterSidebar = () => {
  return (
    <div className="w-full md:w-64 bg-white p-4 rounded shadow-sm">
      <h3 className="text-white bg-green-700 px-2 py-1 rounded font-semibold mb-4">
        BỘ LỌC SẢN PHẨM
      </h3>

      {/* Mức giá */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">CHỌN MỨC GIÁ</h4>
        <div className="space-y-1">
          <label>
            <input type="checkbox" /> Dưới 100.000đ
          </label>
          <br />
          <label>
            <input type="checkbox" /> Từ 100.000đ - 200.000đ
          </label>
          {/* Thêm tiếp các khoảng giá */}
        </div>
      </div>

      {/* Loại sản phẩm */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">LOẠI</h4>
        <div className="space-y-1">
          <label>
            <input type="checkbox" /> Bột làm bánh
          </label>
          <br />
          <label>
            <input type="checkbox" /> Đậu các loại
          </label>
        </div>
      </div>

      {/* Thương hiệu */}
      <div>
        <h4 className="font-semibold mb-2">THƯƠNG HIỆU</h4>
        <div className="space-y-1">
          <label>
            <input type="checkbox" /> Bean Farm
          </label>
          <br />
          <label>
            <input type="checkbox" /> Bean Drink
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
