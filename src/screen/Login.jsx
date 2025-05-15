import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../authMethods";
const Login = ({ setIsLoggedIn }) => {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formDataLogin, setFormDataLogin] = useState({
    username: "",
    password: "",
  });
  const [formDataRegister, setFormDataRegister] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // State để lưu thông báo lỗi
  const [success, setSuccess] = useState(""); // State để lưu thông báo thành công
  const handleToggle = (status) => {
    setIsLogin(status);
    setError(""); // Reset lỗi khi chuyển đổi
    setSuccess(""); // Reset thông báo thành công khi chuyển đổi
  };
  const handleLoginGoogle = async () => {
    try {
      const user = await loginWithGoogle();
      localStorage.setItem("users", JSON.stringify(user));
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      nav("/account");
      setSuccess("Đăng nhập thành công: " + user.displayName);
    } catch (err) {
      setError("Lỗi đăng nhập: " + err.message);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9999/users/login",
        formDataLogin
      );

      const user = response.data.user;

      localStorage.setItem("users", JSON.stringify(user));
      localStorage.setItem("token", response.data.accesToken);
      localStorage.setItem("isLoggedIn", "true");

      setIsLoggedIn(true);
      setSuccess("Đăng nhập thành công!"); // Hiển thị thông báo thành công
      nav("/account"); // Chuyển hướng đến trang dashboard (hoặc trang khác)
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setError("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin."); // Hiển thị thông báo lỗi
      setTimeout(() => {
        setError(""); // Tắt thông báo lỗi sau 3 giây
      }, 3000);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Reset thông báo lỗi trước khi thực hiện kiểm tra
    setSuccess(""); // Reset thông báo thành công trước khi thực hiện kiểm tra
    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp hay không
    if (formDataRegister.password !== formDataRegister.confirmPassword) {
      setError("Nhập lại mật khẩu không trùng với mật khẩu");
      setTimeout(() => {
        setError(""); // Tắt thông báo lỗi sau 3 giây
      }, 3000);
      return; // Dừng thực hiện hàm nếu mật khẩu không khớp
    }
    try {
      const response = await axios.post(
        "http://localhost:9999/users/register",
        formDataRegister
      );
      setSuccess("Đăng ký thành công!"); // Hiển thị thông báo thành công
      setTimeout(() => {
        setSuccess(""); // Tắt thông báo thành công sau 3 giây
      }, 3000);
      setFormDataRegister({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }); // Reset form đăng ký
      setIsLogin(true); // Chuyển sang form đăng nhập
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setError("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin."); // Hiển thị thông báo lỗi
      setTimeout(() => {
        setError(""); // Tắt thông báo lỗi sau 3 giây
      }, 3000);
    }
  };
  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormDataLogin({ ...formDataLogin, [name]: value });
  };
  const handleInputChangeRegister = (e) => {
    const { name, value } = e.target;
    setFormDataRegister({ ...formDataRegister, [name]: value });
  };
  const formLogin = () => (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Email"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeLogin}
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeLogin}
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-yellow-400"
      >
        Đăng nhập
      </button>
      <div className="text-center mt-3 text-sm text-gray-600 cursor-pointer hover:underline">
        Quên mật khẩu
      </div>
    </form>
  );
  const formRegister = () => (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleRegister}>
      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeRegister}
      />
      <input
        type="text"
        name="username"
        placeholder="Tên tài khoảnkhoản"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeRegister}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeRegister}
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeRegister}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Nhập lại mật khẩu"
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        onChange={handleInputChangeRegister}
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-yellow-400"
      >
        Đăng ký
      </button>
    </form>
  );
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Hiển thị thông báo lỗi */}
      {error && <Alert message={error} type="error" showIcon />}
      {/* Hiển thị thông báo thành công */}
      {success && <Alert message={success} type="success" showIcon />}
      <div className="flex justify-center mb-6">
        <div
          onClick={() => handleToggle(true)}
          className={`px-6 py-2 cursor-pointer border-b-2 ${
            isLogin
              ? "border-green-600 text-green-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          ĐĂNG NHẬP
        </div>
        <div
          onClick={() => handleToggle(false)}
          className={`px-6 py-2 cursor-pointer border-b-2 ${
            !isLogin
              ? "border-green-600 text-green-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          ĐĂNG KÝ
        </div>
      </div>
      {/* Form */}
      <div className="bg-white w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold mb-6">
          {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
        </h2>
        {isLogin ? formLogin() : formRegister()}
        {/* Social login */}
        <div className="text-center my-4 text-sm text-gray-600">
          Hoặc đăng nhập bằng
        </div>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <FaFacebookF className="mr-2" /> Facebook
          </button>
          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleLoginGoogle}
          >
            <FcGoogle className="mr-2 bg-white rounded-full text-lg" /> Google
          </button>
        </div>
      </div>
      {/* Bottom benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center text-sm text-gray-700 max-w-4xl w-full">
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium">🚚 Vận chuyển miễn phí</p>
          <p>Hóa đơn trên 5 triệu</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium">🔁 Đổi trả miễn phí</p>
          <p>Trong vòng 7 ngày</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium">💰 100% Hoàn tiền</p>
          <p>Nếu sản phẩm lỗi</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium">📞 Hotline: 1900 6750</p>
          <p>Hỗ trợ 24/7</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
