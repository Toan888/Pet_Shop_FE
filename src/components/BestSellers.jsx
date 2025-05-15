import React, { useState } from "react";
import Slider from "react-slick";

const categories = ["Rau củ", "Trái cây", "Đồ khô"];
const products = [
  {
    name: "Đậu cove",
    category: "Rau củ",
    originalPrice: 55000,
    discountedPrice: 47000,
    discountPercent: 15,
    image: "https://cdn.tgdd.vn/2020/11/content/dau-cove-800x500.jpg",
  },
  {
    name: "Cà chua Hà Lan",
    category: "Rau củ",
    originalPrice: 55000,
    discountedPrice: 55000,
    discountPercent: 0,
    image:
      "https://cdn.tgdd.vn/Files/2021/08/13/1375002/ca-chua-ha-lan-202108130929141899.jpg",
  },
  {
    name: "Bí đao",
    category: "Rau củ",
    originalPrice: 44000,
    discountedPrice: 42500,
    discountPercent: 3,
    image:
      "https://cdn.tgdd.vn/Files/2021/08/09/1374253/bi-dao-la-loai-qua-gi-tac-dung-cach-dung-va-nhung-luu-y-khi-su-dung-202108090859187957.jpg",
  },
  {
    name: "Đậu bắp",
    category: "Rau củ",
    originalPrice: 33000,
    discountedPrice: 31000,
    discountPercent: 6,
    image:
      "https://cdn.tgdd.vn/Files/2020/12/28/1316433/an-dau-bap-co-tac-dung-gi-1-1280x720.jpg",
  },
  {
    name: "Táo đỏ",
    category: "Rau củ",
    originalPrice: 60000,
    discountedPrice: 54000,
    discountPercent: 10,
    image:
      "https://cdn.tgdd.vn/Products/Images/8781/278965/tao-do-kho-400g-202303231105577971.jpg",
  },
];

const BestSellersSection = () => {
  const [activeTab, setActiveTab] = useState("Rau củ");
  const filtered = products.filter((p) => p.category === activeTab);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Banner */}
        <div className="md:col-span-1 bg-green-100 rounded-2xl overflow-hidden relative">
          <img
            src="https://media.istockphoto.com/id/1367983756/vi/anh/gi%E1%BA%A3m-gi%C3%A1-th%E1%BB%A9c-ph%E1%BA%A9m-tr%E1%BB%B1c-tuy%E1%BA%BFn-banner-n%E1%BB%81n-xanh-v%E1%BB%9Bi-rau-v%C3%A0-gi%E1%BB%8F-h%C3%A0ng-thanh-to%C3%A1n-%C4%91%E1%BA%B7t-h%C3%A0ng.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-xl font-bold drop-shadow-lg">
              Giảm giá sốc!
            </h3>
            <button className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition">
              Mua ngay
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-4">
          <div className="flex justify-between items-center mb-6">
            <div className="space-x-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-sm font-semibold px-3 py-1 rounded-full transition ${
                    activeTab === cat
                      ? "bg-yellow-400 text-black shadow"
                      : "text-gray-500 hover:text-yellow-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Slider {...settings}>
            {filtered.map((item, i) => (
              <div key={i} className="px-2">
                <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition relative text-center">
                  {item.discountPercent > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      -{item.discountPercent}%
                    </div>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 mx-auto object-contain"
                  />
                  <h3 className="mt-4 font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <div className="mt-2">
                    {item.discountPercent > 0 && (
                      <p className="text-xs text-gray-400 line-through">
                        {item.originalPrice.toLocaleString()}₫
                      </p>
                    )}
                    <p className="text-lg text-green-600 font-bold">
                      {item.discountedPrice.toLocaleString()}₫
                    </p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSellersSection;
