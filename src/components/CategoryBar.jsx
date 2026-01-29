import { Link } from "react-router-dom";
import { FaFaucet, FaToilet, FaSink, FaTools, FaCogs } from "react-icons/fa";
import { MdOutlinePropaneTank } from "react-icons/md";

const categories = [
  {
    name: "PVC Pipes",
    icon: <FaTools />,
    link: "/category/pvc",
    bg: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "CPVC Pipes",
    icon: <FaTools />,
    link: "/category/cpvc",
    bg: "bg-orange-50",
    hoverBg: "hover:bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    name: "UPVC Pipes",
    icon: <FaTools />,
    link: "/category/upvc",
    bg: "bg-teal-50",
    hoverBg: "hover:bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    name: "Wash Basins",
    icon: <FaSink />,
    link: "/category/washbasin",
    bg: "bg-purple-50",
    hoverBg: "hover:bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Toilet Seats",
    icon: <FaToilet />,
    link: "/category/toilet",
    bg: "bg-red-50",
    hoverBg: "hover:bg-red-100",
    iconColor: "text-red-600",
  },
  {
    name: "Bathroom Taps",
    icon: <FaFaucet />,
    link: "/category/bathroom-taps",
    bg: "bg-green-50",
    hoverBg: "hover:bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "PVC Taps",
    icon: <FaFaucet />,
    link: "/category/pvc-bathroom-taps",
    bg: "bg-cyan-50",
    hoverBg: "hover:bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    name: "PVC Tanks",
    icon: <MdOutlinePropaneTank />,
    link: "/category/pvc-tanks",
    bg: "bg-cyan-50",
    hoverBg: "hover:bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    name: "Accessories",
    icon: <FaCogs />,
    link: "/category/accessories",
    bg: "bg-yellow-50",
    hoverBg: "hover:bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

const CategoryBar = () => {
  return (
    <section className="bg-white border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex gap-4 py-4 overflow-x-auto scrollbar-hide"
          style={{ marginInline: "20px" }}
        >
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.link}
              className={`flex-shrink-0 flex flex-col items-center justify-center
                min-w-[90px] px-4 py-3 rounded-xl
                ${cat.bg} ${cat.hoverBg}
                transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
            >
              <span className={`text-2xl mb-1 ${cat.iconColor}`}>
                {cat.icon}
              </span>
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
