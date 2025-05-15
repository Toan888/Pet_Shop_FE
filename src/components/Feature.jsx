import Slider from "react-slick";

const categories = [
  {
    name: "Trứng",
    products: 8,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  {
    name: "Đồ uống",
    products: 11,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  {
    name: "Bánh và sữa",
    products: 0,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  {
    name: "Hải sản",
    products: 10,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  {
    name: "Bánh mì",
    products: 3,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  {
    name: "Salad",
    products: 5,
    image:
      "https://cdn.tgdd.vn/2020/11/content/20200420an-nhieu-trung-co-tot-800x500.jpg",
  },
  { name: "Thực phẩm khô", products: 10, image: "https://link/to/kho.png" },
  { name: "Kiwi hữu cơ", products: 4, image: "https://link/to/kiwi.png" },
  { name: "Hồng giòn", products: 7, image: "https://link/to/hong.png" },
];

const FeaturedCategories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-2 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-left">Danh mục nổi bật</h2>
      <div className="flex space-x-6 mb-6 text-gray-600 font-medium justify-center">
        <span className="cursor-pointer hover:text-black">Trái cây</span>
        <span className="cursor-pointer hover:text-black">Rau củ quả</span>
        <span className="cursor-pointer hover:text-black">Thực phẩm sạch</span>
      </div>

      <Slider {...settings}>
        {categories.map((cat, i) => (
          <div key={i} className="px-2">
            <div className="bg-gray-100 rounded-xl text-center py-4 hover:shadow-md transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="mx-auto h-20 mb-2"
              />
              <h3 className="text-base font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.products} sản phẩm</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedCategories;
