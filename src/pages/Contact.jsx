import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaWhatsapp, FaStore, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!/^\d{10}$/.test(formData.mobile)) {
      return setError("Please enter a valid 10-digit mobile number");
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://plumber-backend.onrender.com/api/queries/create",
        formData,
      );

      if (data.success) {
        setSuccess("Your query has been submitted. We will contact you soon.");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a plumbing issue or looking for sanitary products? Send us
              your query and we’ll get back to you quickly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Abhiyaan Sanitary & Plumber Service
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaStore className="text-blue-600" />
                  <span>Dugra Nagar Mod</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600" />
                  <span>9205448629</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-600" />
                  <span>9205448629</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600" />
                  <span>abhiyaan@gmail.com</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 rounded-lg p-4 text-center font-medium">
                  <Link to="/category/pvc">PVC & CPVC Pipes</Link>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center font-medium">
                  <Link to="/category/bathroom-taps">Bathroom Fittings</Link>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center font-medium">
                  <Link to="/category/washbasin">Wash Basins</Link>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center font-medium">
                  <Link to="/book-plumber"> Plumbing Service</Link>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Your Query
              </h3>

              {error && (
                <p className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}

              {success && (
                <p className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                  {success}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your plumbing issue or product requirement"
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Query"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
