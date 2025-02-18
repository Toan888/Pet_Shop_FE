import React from "react";
import Menu from "./Menu";

const App = () => {
  const categories = [
    {
      _id: "64f7c8d2e69e4b88a1a12345",
      name: "Combo Đồ Sơ Sinh",
      slug: "combo-do-so-sinh",
      subCategories: [
        {
          _id: "64f7c8d2e69e4b88a1a54321",
          name: "Đồ thiết yếu cho bé sơ sinh",
          slug: "do-thiet-yeu-cho-be-so-sinh",
          products: [
            {
              _id: "64f7d123e69e4b88a1a98765",
              name: "Quần áo sơ sinh",
              price: 150000,
              images: ["https://example.com/product-image-1.jpg"],
            },
            {
              _id: "64f7d234e69e4b88a1a87654",
              name: "Khăn tắm sơ sinh",
              price: 90000,
              images: ["https://example.com/product-image-2.jpg"],
            },
          ],
        },
        {
          _id: "64f7c8d2e69e4b88a1a67890",
          name: "Chăm sóc bé sơ sinh",
          slug: "cham-soc-be-so-sinh",
          products: [
            {
              _id: "64f7d345e69e4b88a1a11223",
              name: "Chậu tắm",
              price: 300000,
              images: ["https://example.com/product-image-3.jpg"],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Menu sản phẩm</h1>
      <Menu categories={categories} />
    </div>
  );
};

export default App;
