import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          You will be redirected to the home page in 5 seconds.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
