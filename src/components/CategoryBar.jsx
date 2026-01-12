import { Link } from "react-router-dom";
import {
  FaBath,
  FaFaucet,
  FaToilet,
  FaSink,
  FaWater,
  FaTools,
  FaCogs,
} from "react-icons/fa";

const categories = [
  { name: "PVC Pipes", icon: <FaTools />, link: "/category/pvc" },
  { name: "CPVC Pipes", icon: <FaTools />, link: "/category/cpvc" },
  { name: "UPVC Pipes", icon: <FaTools />, link: "/category/upvc" },
  { name: "Wash Basins", icon: <FaSink />, link: "/category/washbasin" },
  { name: "Toilets", icon: <FaToilet />, link: "/category/toilet" },
  { name: "Bath Tubs", icon: <FaBath />, link: "/category/bathtub" },
  {
    name: "Bathroom Taps",
    icon: <FaFaucet />,
    link: "/category/bathroom-taps",
  },
  {
    name: "PVC Taps",
    icon: <FaFaucet />,
    link: "/category/bathroom-taps",
  },
  { name: "Kitchen Taps", icon: <FaWater />, link: "/category/kitchen-taps" },
  { name: "Accessories", icon: <FaCogs />, link: "/category/accessories" },
];

const CategoryBar = () => {
  return (
    <section className="bg-white border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.link}
              className="flex-shrink-0 flex flex-col items-center justify-center 
                         min-w-[90px] px-4 py-3 rounded-xl 
                         bg-gray-50 hover:bg-blue-50 
                         transition hover:shadow-md"
            >
              <span className="text-2xl text-blue-600 mb-1">{cat.icon}</span>
              <span className="text-sm font-medium text-gray-700 text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
