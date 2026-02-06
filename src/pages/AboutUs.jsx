import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaPhoneAlt, FaEnvelope, FaTools, FaBath } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Abhiyaan Sanitary & Plumber Service
              </h1>
              <h1 className="text-3xl md:text-xl font-bold mb-4">
                Modern Sanitary & PVC Bathroom Solutions
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Trusted sanitary products and professional plumbing solutions
                backed by real industry experience.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/poster.png"
              alt="Sanitary Bathroom"
              className="rounded-xl shadow-lg w-full h-[380px] object-cover"
            />
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <img
              src="logo2.png"
              alt="Plumbing Service"
              className="rounded-xl shadow-md w-full h-[420px] object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Our Shop
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Abhiyaan Sanitary and Plumber Service</strong> is a
                newly established shop led by <strong>Sajal Bajaj</strong>,
                built on years of hands-on experience in sanitary and plumbing
                work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in PVC and CPVC pipes, ceramic sanitary items,
                wash basins, English seats, pipe fittings, and modern bathroom
                accessories. Our experience helps us guide customers with the
                right products and practical solutions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services / Experience */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-gray-800"
            >
              Our Expertise
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "PVC & CPVC Pipe Fittings",
                "Ceramic Sanitary Items",
                "Wash Basins & English Seats",
                "Bathroom Accessories",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm text-center"
                >
                  <FaBath className="text-blue-600 text-3xl mx-auto mb-4" />
                  <p className="font-medium text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              Get in Touch
            </motion.h2>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], y: [0, -6, 0], opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-full p-4 shadow-lg mb-6"
            >
              <img
                src="/logo2.png"
                alt="Abhiyaan Logo"
                className="w-32 h-32 rounded-full object-cover"
              />
            </motion.div>

            <p className="text-blue-100 mb-6">
              For sanitary products or plumbing services, contact us anytime.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>9205448629</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>abhiyaan@gmail.com</span>
              </div>
            </div>

            <p className="text-blue-200 text-sm">Owner : Sajal Bajaj</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
