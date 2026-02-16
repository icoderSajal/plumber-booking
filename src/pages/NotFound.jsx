// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const NotFound = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
//         <h1 className="text-6xl font-bold text-red-500">404</h1>
//         <div>
//           <img src="./404.png" alt="notfound" />
//         </div>

//         <h2 className="text-2xl font-semibold mt-4 text-gray-800">
//           Page Not Found
//         </h2>

//         <p className="text-gray-600 mt-3">
//           The page you are looking for doesn’t exist or was moved.
//         </p>

//         <p className="text-sm text-gray-500 mt-4">
//           You will be redirected to the home page in 5 seconds.
//         </p>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Go Home Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/404.png"; // adjust path if needed

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔵 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-slowZoom"
        style={{ backgroundImage: `url(${NotFoundImg})` }}
      />

      {/* 🔵 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* 🔵 Glass Card */}
      <div className="relative z-10 text-center bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn">
        <h1 className="text-7xl font-bold text-white drop-shadow-lg animate-bounce">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-4 text-white">
          Pipeline Burst! Page Not Found
        </h2>

        <p className="text-gray-200 mt-3">
          Looks like this page leaked somewhere 😅
        </p>

        <p className="text-sm text-gray-300 mt-4">
          Redirecting to home in 5 seconds...
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-blue-600/80 backdrop-blur-md text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          Go Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
