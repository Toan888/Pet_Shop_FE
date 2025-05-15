import React, { useEffect, useState } from "react";

const AddressList = () => {
  const [address, setAddress] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    country: "Vietnam",
    province: "",
    district: "",
    ward: "",
    isDefault: false,
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("token");

    const fetchAddresses = async () => {
      if (!users?._id) return;

      try {
        const response = await fetch(
          `http://localhost:9999/users/${users._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setAddress(data.address || []);
      } catch (error) {
        console.error("Lỗi khi lấy địa chỉ:", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const newAddress = { ...form };
    const updatedAddressList = [...address, newAddress];
    setAddress(updatedAddressList);

    const users = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:9999/users/address/${users._id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ address: updatedAddressList }),
        }
      );

      const result = await response.json();
      console.log("Cập nhật địa chỉ thành công:", result);
    } catch (error) {
      console.error("Lỗi cập nhật địa chỉ:", error);
    }

    setForm({
      fullName: "",
      phone: "",
      address: "",
      country: "Vietnam",
      province: "",
      district: "",
      ward: "",

      isDefault: false,
    });

    document.getElementById("modal-1").checked = false;
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Địa chỉ của bạn</h2>

      <label
        className="bg-green-600 text-white hover:bg-yellow-400 mb-4 btn"
        htmlFor="modal-1"
      >
        Thêm địa chỉ
      </label>

      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content w-[95%] max-w-2xl mx-auto flex flex-col gap-4">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl font-bold">THÊM ĐỊA CHỈ MỚI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Họ tên"
              value={form.fullName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={form.address}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="country"
              value="Vietnam"
              disabled
              className="input input-bordered w-full bg-gray-100"
            />
            <input
              type="text"
              name="province"
              placeholder="Tỉnh thành"
              value={form.province}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="district"
              placeholder="Quận huyện"
              value={form.district}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="ward"
              placeholder="Phường xã"
              value={form.ward}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <label className="label cursor-pointer mt-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={form.isDefault}
              onChange={handleChange}
              className="checkbox checkbox-sm"
            />
            <span className="label-text ml-2">Đặt là địa chỉ mặc định?</span>
          </label>

          <div className="flex justify-end gap-3 mt-4">
            <button
              className="btn"
              onClick={() =>
                (document.getElementById("modal-1").checked = false)
              }
            >
              Hủy
            </button>
            <button
              className="btn btn-success text-white"
              onClick={handleSubmit}
            >
              Thêm địa chỉ
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {address && address.length > 0 ? (
          <ul className="list-disc pl-5">
            {address.map((addr, index) => (
              <li key={index} className="text-gray-700 mb-2">
                <strong>{addr.fullName}</strong> - {addr.phone} <br />
                {addr.address}, {addr.ward}, {addr.district}, {addr.province},{" "}
                {addr.country},
                {addr.isDefault && (
                  <span className="text-green-600 font-semibold">
                    {" "}
                    (Mặc định)
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">Không có địa chỉ nào</div>
        )}
      </div>
    </div>
  );
};

export default AddressList;
