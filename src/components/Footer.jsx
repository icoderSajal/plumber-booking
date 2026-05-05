import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/logo.png";
import MapSection from "./MapSection";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "8:00 AM - 8:00 PM" },
    { id: 2, day: "Tuesday", time: "8:00 AM - 8:00 PM" },
    { id: 3, day: "Wednesday", time: "8:00 AM - 8:00 PM" },
    { id: 4, day: "Thursday", time: "8:00 AM - 8:00 PM" },
    { id: 5, day: "Friday", time: "8:00 AM - 8:00 PM" },
    { id: 6, day: "Saturday", time: "8:00 AM - 8:00 PM" },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="Abiyaan Logo"
            className="w-32 h-32 rounded-full mb-4 object-cover transition-transform duration-300 hover:scale-105"
          />
          <p className="text-gray-300 text-sm">
            Abiyaan Sanitary - Quality plumbing solutions at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="flex flex-col space-y-2">
            <Link href={"/"} className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link
              href={"/book-plumber"}
              className="hover:text-blue-400 transition"
            >
              Book Plumber
            </Link>
            <Link href={"/contact"} className="hover:text-blue-400 transition">
              Contact
            </Link>
            <Link href={"/about"} className="hover:text-blue-400 transition">
              About
            </Link>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {hours.map((h) => (
              <li key={h.id} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          <div className="flex items-center mb-2 text-gray-300">
            <FaPhone className="mr-2" />
            <span>9205448629</span>
          </div>

          <div className="flex items-center mb-2 text-gray-300">
            <MdEmail className="mr-2" />
            <span>abhiyaan@gmail.com</span>
          </div>

          {/* Address */}
          <div className="flex items-start mb-3 text-gray-300">
            <FaLocationArrow className="mr-2 mt-1" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sanjay+Nagar+Durga+Nagar+Near+Shive+General+Store+Bareilly+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Sanjay Nagar, Durga Nagar Near Shiva General Store, Bareilly,
              Uttar Pradesh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
