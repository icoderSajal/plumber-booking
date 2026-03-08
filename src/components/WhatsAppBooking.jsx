import { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaTools,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "./Navbar";

const WhatsAppBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // clear error when user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    if (!form.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;

    setLoading(true);

    const message = `New Plumbing Booking%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Service: ${form.service}%0A
Location: ${form.location}`;

    const url = `https://wa.me/9192054486297?text=${message}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Book Plumbing Service
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Quick booking. Our plumber will contact you soon.
          </p>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
                <FaPhoneAlt className="text-gray-400 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
                <FaTools className="text-gray-400 mr-3" />
                <select
                  name="service"
                  onChange={handleChange}
                  className="w-full p-3 outline-none bg-transparent"
                >
                  <option value="">Select Service</option>
                  <option>Pipe Leakage Repair</option>
                  <option>Bathroom Fitting</option>
                  <option>Kitchen Fitting</option>
                  <option>Tank Cleaning</option>
                  <option>Tap Installation</option>
                </select>
              </div>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-400">
                <FaMapMarkerAlt className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={sendWhatsApp}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-lg shadow-md transition duration-300
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            >
              {loading ? (
                "Opening WhatsApp..."
              ) : (
                <>
                  <FaWhatsapp size={20} />
                  Book via WhatsApp
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatsAppBooking;
