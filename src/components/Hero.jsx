import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Professional Plumbing Services
        </h2>

        <p className="text-gray-600 mb-6">
          Trusted plumbers for home and commercial needs
        </p>

        <button
          onClick={() => navigate("/book-plumber")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Book a Plumber
        </button>
      </div>
    </section>
  );
};

export default Hero;
