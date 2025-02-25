import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../contexts/AuthContext'; // เปลี่ยนวิธีการดึงค่า Token โดย import useAuth

const BookingEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  
  const maxGuests = {
    standard: 2,
    deluxe: 3,
    suite: 4,
  };
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    roomtype: "",
    guests: 1,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooking();
  }, [id]);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/bookings/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // แปลงวันที่ให้อยู่ในรูปแบบที่ input type="date" ใช้ได้
      const booking = response.data;
      booking.checkin = booking.checkin.split("T")[0];
      booking.checkout = booking.checkout.split("T")[0];
      setFormData(booking);
      setLoading(false);
    } catch (err) {
      alert("ไม่สามารถดึงข้อมูลการจอง");
      navigate("/admin/bookings");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/api/bookings/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("ข้อมูลการจองถูกอัปเดตเรียบร้อยแล้ว");
      navigate("/admin/bookings");
    } catch (err) {
      alert("ไม่สามารถบันทึกข้อมูลได้");
    }
  };

  if (loading)
    return <div className="text-center py-4">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">แก้ไขข้อมูลการจอง</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ฟอร์มเหมือนกับ BookingForm แต่มีข้อมูลเดิม */}
        <div>
          <label className="block text-gray-700 mb-2">ชื่อ-นามสกุล:</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">อีเมล:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">เบอร์โทรศัพท์:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">วันเข้าพัก:</label>
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">วันออก:</label>
          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">ประเภทห้อง:</label>
          <select
            name="roomtype"
            value={formData.roomtype}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">จำนวนผู้เข้าพัก:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            max={maxGuests[formData.roomtype]}
            min={1}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            บันทึก
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/bookings")}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingEdit;