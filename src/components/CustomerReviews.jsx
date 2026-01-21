import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ashutosh Gangwar",
    rating: 5,
    review:
      "Excellent plumbing service. Quick response and very professional work. Highly recommended!",
  },
  {
    name: "Anita Verma",
    rating: 4,
    review:
      "Very polite staff and clean work. Fixed my leakage issue.",
  },
  {
    name: "Mohit Jain",
    rating: 5,
    review:
      "Best plumbing service I’ve used. Affordable pricing and quality service.",
  },
  {
    name: "Pooja Mehta",
    rating: 4,
    review:
      "Good experience overall. Technician arrived on time and explained everything clearly.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-6">“{item.review}”</p>

              <div className="border-t pt-4">
                <h4 className="text-gray-800 font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-500">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
