import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const plumbers = [
  {
    name: "Dharajeet Singh",
    image: "/plumber.png",
    mobile: "8754412356",
    experience: "15 Years Experience",
  },
  {
    name: "Umesh Kumar Sharma",
    image: "/plumber.png",
    mobile: "9105639092",
    experience: "8 Years Experience",
  },
  {
    name: "Mahesh Kumar Sharma",
    image: "/plumber.png",
    mobile: "9568264509",
    experience: "5 Years Experience",
  },
  {
    name: "Rahul",
    image: "/plumber.png",
    mobile: "8755307090",
    experience: "10 Years Experience",
  },
  {
    name: "Pankaj Kumar",
    image: "/plumber.png",
    mobile: "8057187801",
    experience: "6 Years Experience",
  },
  {
    name: "Harish Kumar",
    image: "/plumber.png",
    mobile: "8753307090",
    experience: "10 Years Experience",
  },
  {
    name: "Shiva",
    image: "/plumber.png",
    mobile: "9696248883",
    experience: "4 Years Experience",
  },
  {
    name: "Durgesh Yadav",
    image: "/plumber.png",
    mobile: "8218566367",
    experience: "8 Years Experience",
  },
  {
    name: "Mahipal Patel",
    image: "/plumber.png",
    mobile: "9389588147",
    experience: "6 Years Experience",
  },
  {
    name: "Manoj Kumar",
    image: "/plumber.png",
    mobile: "7302603087",
    experience: "6 Years Experience",
  },
  {
    name: "Puran Morya",
    image: "/plumber.png",
    mobile: "6395558905",
    experience: "10 Years Experience",
  },
];

// Mask mobile number → XXXXXX1234
const maskMobile = (number) => {
  return "XXXXXX" + number.slice(-4);
};

const OurPlumbers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Our Expert Plumbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plumbers.map((plumber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={plumber.image}
                  alt={plumber.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                />

                <h3 className="text-lg font-semibold text-gray-800">
                  {plumber.name}
                </h3>

                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full mt-2">
                  <CheckCircle size={14} />
                  Verified
                </span>

                <p className="text-sm text-gray-600 mt-3">
                  {plumber.experience}
                </p>

                <div className="flex items-center gap-2 mt-4 text-gray-700 text-sm">
                  <Phone size={16} />
                  {maskMobile(plumber.mobile)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlumbers;
