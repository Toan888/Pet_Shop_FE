import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm pt-10 pb-4 px-4 lg:px-20 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Cột 1: Thông tin */}
        <div>
          <div className="flex items-center mb-2">
            <img src="/logo.png" alt="Bean Farm" className="h-8 mr-2" />
            <h2 className="text-lg font-bold text-green-700">
              <span className="text-yellow-500">Bean</span> Farm
            </h2>
          </div>
          <p className="mb-2">
            Bean Farm - Siêu thị trực tuyến mua sắm nông sản, chất lượng, tươi
            xanh.
          </p>
          <p className="text-green-700 font-medium mb-2">
            Giá siêu tốt - Giao siêu tốc.
          </p>
          <p>
            <strong>Địa chỉ:</strong> 70 Lữ Gia, Phường 15, Quận 11, TP.HCM
          </p>
          <p>
            <strong>Điện thoại:</strong>{" "}
            <span className="text-green-700">1900 6750</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span className="text-green-700">support@sapo.vn</span>
          </p>
        </div>

        {/* Cột 2: Chính sách */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">CHÍNH SÁCH</h3>
          <ul className="space-y-1">
            <li>Chính sách thành viên</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách đổi sản phẩm</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách cộng tác viên</li>
            <li>Chính sách bảo hành</li>
          </ul>
        </div>

        {/* Cột 3: Hướng dẫn */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">HƯỚNG DẪN</h3>
          <ul className="space-y-1">
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn đổi trả</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Chương trình cộng tác viên</li>
            <li>Tìm kiếm</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        {/* Cột 4: Kết nối và thanh toán */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">
            KẾT NỐI VỚI CHÚNG TÔI
          </h3>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-white bg-blue-600 p-2 rounded">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white bg-sky-400 p-2 rounded">
              <FaTwitter />
            </a>
            <a href="#" className="text-white bg-red-600 p-2 rounded">
              <FaYoutube />
            </a>
            <a href="#" className="text-white bg-pink-500 p-2 rounded">
              <FaInstagram />
            </a>
          </div>

          <h3 className="font-semibold text-green-700 mb-2">
            HÌNH THỨC THANH TOÁN
          </h3>
          <div className="flex flex-wrap gap-2">
            <img src="/cash.png" alt="Tiền mặt" className="h-6" />
            <img src="/bank.png" alt="Chuyển khoản" className="h-6" />
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/momo.png" alt="Momo" className="h-6" />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center border-t border-green-600 pt-4 text-green-800 font-semibold">
        © Bản quyền thuộc về <span className="text-yellow-500">Mr. Bean</span> |
        Cung cấp bởi <span className="text-blue-600">Sapo</span>
      </div>
    </footer>
  );
};

export default Footer;
