// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// export default function TopSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Abhiyaan Sanitary & Plumber Service
//           </h1>

//           <p className="mt-6 text-lg text-gray-600">
//             Complete solution for all your sanitary needs. We deal in PVC, CPVC
//             & UPVC pipes and fittings including elbows, sockets, P-traps,
//             nanitrips, wash basins, toilet seats, brass & PVC taps and premium
//             bathroom accessories.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link
//               href="tel:9205448629"
//               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
//             >
//               <FaPhoneAlt /> Call Now
//             </Link>

//             <Link
//               href="https://wa.me/919205448629"
//               className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600"
//             >
//               <FaWhatsapp /> WhatsApp
//             </Link>
//             {/* <Link
//               to="https://plumber-booking.vercel.app/category/washbasin"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
//             >
//               Explore Products
//             </Link>

//             <Link
//               to="https://plumber-booking.vercel.app/contact"
//               className="border border-gray-400 hover:border-blue-600 text-gray-700 px-6 py-3 rounded-xl transition"
//             >
//               Contact Us
//             </Link> */}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="flex justify-center"
//         >
//           <img
//             src="/hero.png"
//             alt="Luxury Toilet"
//             className="w-[400px] md:w-[500px] drop-shadow-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function TopSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-[55vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Abhiyaan Sanitary & Plumber Service
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Complete solution for all your sanitary needs. We deal in PVC, CPVC
            & UPVC pipes and fittings including elbows, sockets, P-traps,
            nanitrips, wash basins, toilet seats, brass & PVC taps and premium
            bathroom accessories.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:9205448629"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/919205448629"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <img
            src="/hero.png"
            alt="Luxury Toilet"
            className="w-[300px] md:w-[380px] lg:w-[420px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
