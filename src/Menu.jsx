import React, { useState } from "react";

const Menu = ({ categories }) => {
  // State lưu danh mục con hiển thị
  const [activeCategory, setActiveCategory] = useState(null);

  // Xử lý khi hover vào danh mục cha
  const handleMouseEnter = (categoryId) => {
    setActiveCategory(categoryId); // Hiển thị danh mục con khi hover
  };

  // Xử lý khi mouse rời khỏi danh mục cha
  const handleMouseLeave = () => {
    setActiveCategory(null); // Ẩn danh mục con khi rời chuột
  };

  return (
    <div className="menu">
      <ul>
        {categories.map((category) => (
          <li
            key={category._id}
            onMouseEnter={() => handleMouseEnter(category._id)}
            onMouseLeave={handleMouseLeave}
            className="parent-category"
          >
            <span>{category.name}</span>
            {activeCategory === category._id && (
              <div className="sub-categories">
                {category.subCategories.map((subCategory) => (
                  <div key={subCategory._id} className="sub-category">
                    <h3>{subCategory.name}</h3>
                    <ul>
                      {subCategory.products.map((product) => (
                        <li key={product._id}>
                          <img src={product.images[0]} alt={product.name} />
                          <span>{product.name}</span>
                          <span>{product.price} VND</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
