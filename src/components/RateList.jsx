// import React from "react";
// import { FaFaucet, FaWhatsapp } from "react-icons/fa";
// import { PiEngineFill, PiBathtubFill } from "react-icons/pi";
// import { GiBrainLeak, GiWaterTank } from "react-icons/gi";

// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Logo from "../assets/logo.png"; // your logo
// import { FaKitchenSet } from "react-icons/fa6";

// const services = [
//   { name: "बाथरूम फिटिंग", price: "₹5000 से शुरू", icon: <PiBathtubFill /> },
//   { name: "किचन फिटिंग", price: "₹3200 से शुरू", icon: <FaKitchenSet /> },
//   { name: "प्रति नल फिटिंग", price: "₹50", icon: <FaFaucet /> },
//   { name: "मोटर इंस्टॉलेशन", price: "₹500", icon: <PiEngineFill /> },
//   { name: "मोटर खोलना", price: "₹400", icon: <PiEngineFill /> },
//   { name: "पाइप लीकेज रिपेयर", price: "₹1500", icon: <GiBrainLeak /> },
//   { name: "500 लीटर टंकी इंस्टॉलेशन", price: "₹300", icon: <GiWaterTank /> },
//   { name: "500 लीटर टंकी सफाई", price: "₹250", icon: <GiWaterTank /> },
// ];

// const RateList = () => {
//   return (
//     <>
//       <Navbar />

//       <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
//         {/* Logo Background Watermark */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <img
//             src={Logo}
//             alt="logo-bg"
//             className="w-[500px] max-w-[90%] opacity-5"
//           />
//         </div>

//         {/* Discount Badge */}
//         <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse z-10">
//           20% OFF
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           {/* Title */}
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center text-blue-800 mb-8 tracking-wide"
//           >
//             हमारी सेवाएं और रेट
//           </motion.h2>

//           {/* Rate Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-4 border border-blue-100"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.02 }}
//                 className="flex justify-between items-center border-b pb-3 hover:bg-blue-50 transition duration-300 rounded-lg px-2"
//               >
//                 <div className="flex items-center gap-3 text-blue-700">
//                   <span className="text-xl">{service.icon}</span>
//                   <span className="font-medium">{service.name}</span>
//                 </div>

//                 <span className="text-orange-600 font-semibold">
//                   {service.price}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Notice */}
//           <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg text-sm text-gray-700 shadow-sm">
//             <p className="font-semibold mb-1">📌 महत्वपूर्ण सूचना</p>
//             <p>
//               काम की स्थिति व शिकायत के अनुसार कीमत में बदलाव संभव है। अंतिम
//               राशि निरीक्षण के बाद तय होगी।
//             </p>
//           </div>

//           {/* WhatsApp Button */}
//           <motion.a
//             href="https://wa.me/919205448629"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             className="mt-8 flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-xl shadow-lg font-semibold hover:bg-green-600 transition"
//           >
//             <FaWhatsapp /> बुक करें WhatsApp पर
//           </motion.a>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default RateList;

import React, { useState } from "react";
import { FaFaucet, FaWhatsapp } from "react-icons/fa";
import { PiEngineFill, PiBathtubFill } from "react-icons/pi";
import { GiBrainLeak, GiWaterTank } from "react-icons/gi";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "../assets/logo.png";
import CardBg from "../assets/businessCards.png";
import { FaKitchenSet } from "react-icons/fa6";

const services = [
  { name: "बाथरूम फिटिंग", price: "₹5000 से शुरू", icon: <PiBathtubFill /> },
  { name: "किचन फिटिंग", price: "₹3200 से शुरू", icon: <FaKitchenSet /> },
  { name: "प्रति नल फिटिंग", price: "₹50+", icon: <FaFaucet /> },
  { name: "मोटर इंस्टॉलेशन", price: "₹450+", icon: <PiEngineFill /> },
  { name: "मोटर खोलना", price: "₹400+", icon: <PiEngineFill /> },
  { name: "पाइप लीकेज रिपेयर", price: "₹200+", icon: <GiBrainLeak /> },
  { name: "500 लीटर टंकी इंस्टॉलेशन", price: "₹300+", icon: <GiWaterTank /> },
  { name: "500 लीटर टंकी सफाई", price: "₹250", icon: <GiWaterTank /> },
];

const RateList = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image First */}
        <img
          src={CardBg}
          alt="bg"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        {/* Content */}
        {loaded && (
          <div className="relative z-10 w-full px-4 py-12">
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src={Logo}
                alt="logo-bg"
                className="w-[300px] sm:w-[400px] md:w-[500px] opacity-5"
              />
            </div>

            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
              20% OFF
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8"
              >
                हमारी सेवाएं और रेट
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 rounded-2xl shadow-xl p-4 sm:p-6 space-y-3 border border-blue-100"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center border-b pb-3 hover:bg-blue-50 transition rounded-lg px-2 text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 text-blue-700">
                      <span className="text-lg">{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                    </div>

                    <span className="text-orange-600 font-semibold">
                      {service.price}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg text-sm text-gray-700 shadow-sm">
                <p className="font-semibold mb-1">📌 महत्वपूर्ण सूचना</p>
                <p>
                  काम की स्थिति व शिकायत के अनुसार कीमत में बदलाव संभव है। अंतिम
                  राशि निरीक्षण के बाद तय होगी।
                </p>
              </div>

              <motion.a
                href="https://wa.me/919205448629"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-8 flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-xl shadow-lg font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp /> बुक करें WhatsApp पर
              </motion.a>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default RateList;
