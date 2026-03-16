import { motion } from "framer-motion";

const services = [
  {
    name: "Tap Repair",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
    desc: "Professional tap repair and installation services."
  },
  {
    name: "Bathroom Fitting",
    image:
      "https://images.unsplash.com/photo-1600566752227-8f3b7c8f47c7?q=80&w=800",
    desc: "Complete bathroom fitting and installation."
  },
  {
    name: "Pipe Leakage",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800",
    desc: "Quick detection and repair of pipe leakages."
  },
  {
    name: "Toilet Repair",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
    desc: "Toilet blockage and repair services."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500 px-4">

                <h3 className="text-xl font-semibold mb-2">
                  {service.name}
                </h3>

                <p className="text-sm">
                  {service.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}