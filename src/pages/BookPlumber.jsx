import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUser, FaPhone, FaMapMarkerAlt, FaTools } from "react-icons/fa";

const BookPlumber = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    service: "",
    date: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10 digit mobile number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.date) {
      newErrors.date = "Please choose a preferred date";
    }

    if (formData.description.trim().length < 10) {
      newErrors.description =
        "Please describe the issue in at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "https://plumber-backend.onrender.com/api/complaints/book",
        {
          name: formData.name,
          mobile: formData.mobile,
          address: formData.address,
          service: formData.service,
          preferredDate: formData.date,
          description: formData.description,
        }
      );

      if (res.data.success) {
        setMessage("✅ Booking successful! Our plumber will contact you soon.");
        setFormData({
          name: "",
          mobile: "",
          address: "",
          service: "",
          date: "",
          description: "",
        });
        setErrors({});
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "❌ Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
          <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Book a Plumber</h2>
            <p className="text-blue-100 mb-6">
              Fast & reliable plumbing service at your doorstep.
            </p>
            <ul className="space-y-3 text-sm">
              <li>✔ Experienced plumbers</li>
              <li>✔ Same day service available</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Trusted by customers</li>
            </ul>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {message && (
                <div className="text-sm p-3 rounded bg-gray-100 text-center">
                  {message}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-medium">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.mobile ? "border-red-500" : ""
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium">Address</label>
                <textarea
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.address ? "border-red-500" : ""
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.service ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select service</option>
                  <option>Pipe Leakage</option>
                  <option>Wash Basin Installation</option>
                  <option>Bathroom Fitting</option>
                  <option>Kitchen Fitting</option>
                  <option>Blocked Drain</option>
                  <option>Other</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="text-sm font-medium">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.date ? "border-red-500" : ""
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium">Issue Description</label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg text-sm ${
                    errors.description ? "border-red-500" : ""
                  }`}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {loading ? "Booking..." : "Book Plumber"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookPlumber;
