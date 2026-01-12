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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/complaints/book",
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
        setMessage("✅ Booking successful! Our plumber will contact you.");
        setFormData({
          name: "",
          mobile: "",
          address: "",
          service: "",
          date: "",
          description: "",
        });
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
          {/* Left Info */}
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

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Message */}
              {message && (
                <div className="text-sm p-3 rounded bg-gray-100 text-center">
                  {message}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative mt-1">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="pl-10 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-medium">Mobile Number</label>
                <div className="relative mt-1">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="10 digit number"
                    className="pl-10 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium">Address</label>
                <div className="relative mt-1">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="2"
                    placeholder="House no, street, area"
                    className="pl-10 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium">Service Required</label>
                <div className="relative mt-1">
                  <FaTools className="absolute left-3 top-3 text-gray-400" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select service</option>
                    <option>Pipe Leakage</option>
                    <option>Wash Basin Installation</option>
                    <option>Bathroom Fitting</option>
                    <option>Kitchen Fitting</option>
                    <option>Blocked Drain</option>
                    <option>Other</option>
                  </select>
                </div>
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
                  required
                  className="mt-1 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium">Issue Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                  placeholder="Describe your issue"
                  className="mt-1 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition
                  ${
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
