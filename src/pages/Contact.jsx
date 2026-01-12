import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        formData
      );

      if (data.success) {
        setSuccess("Your query has been submitted. We will contact you soon.");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Plumbing services, sanitary products, or general queries. Reach
              out and our team will assist you quickly.
            </p>

            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                <span className="font-medium">Shop:</span> Abiyaan Sanitary
              </p>
              <p>
                <span className="font-medium">Address:</span> Dugra Nagar Mod
              </p>
              <p>
                <span className="font-medium">Phone:</span> 9205448629
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span> 9205448629
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Send Your Query</h3>

            {error && (
              <p className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </p>
            )}

            {success && (
              <p className="mb-3 text-sm text-green-600 bg-green-50 p-2 rounded">
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
                className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message or product query"
                className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

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
      </section>

      <Footer />
    </>
  );
};

export default Contact;
