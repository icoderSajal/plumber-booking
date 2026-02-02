// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => setMenuOpen(false)}
//         >
//           <img src="/logo.png" alt="PipeMistri" className="h-12 w-auto" />
//           <span className="text-lg font-bold text-blue-600 hidden sm:block">
//             Abhiyaan Sanitary
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 font-medium">
//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>
//           {/* <Link to="/products" className="hover:text-blue-600">
//             Products
//           </Link> */}

//           <Link to="/about" className="hover:text-blue-600">
//             About
//           </Link>
//           <Link to="/complaints" className="hover:text-blue-600">
//             Complains
//           </Link>
//           <Link to="/contact" className="hover:text-blue-600">
//             Contact
//           </Link>
//           {/* <Link to="/admin" className="hover:text-blue-600">
//             Dashboard
//           </Link> */}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(true)}
//         >
//           <GiHamburgerMenu />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div className="md:hidden fixed inset-0 bg-black bg-opacity-40">
//           <div className="bg-white w-full p-6 animate-slideDown">
//             {/* Close Button */}
//             <div className="flex justify-end">
//               <button className="text-2xl" onClick={() => setMenuOpen(false)}>
//                 <AiOutlineClose />
//               </button>
//             </div>

//             {/* Mobile Links */}
//             <div className="flex flex-col gap-5 mt-6 text-lg font-medium">
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-600"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/about"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-600"
//               >
//                 About Us
//               </Link>

//               <Link
//                 to="/book-plumber"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-600"
//               >
//                 Book Plumber
//               </Link>
//               <Link to="/complaints" className="hover:text-blue-600">
//                 Complains
//               </Link>
//               <Link
//                 to="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-600"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaTools } from "react-icons/fa";
import { BiBorderRadius } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLink =
    "flex items-center gap-2 text-white/90 hover:text-white transition-all duration-200";

  const activeLink = "text-white font-semibold border-b-2 border-white/80 pb-1";

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 backdrop-blur shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Abhiyaan Sanitary"
            className="h-11 w-auto"
            style={{ borderRadius: "50%" }}
          />
          <span className="text-lg font-bold text-white hidden sm:block">
            Abhiyaan Sanitary
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            <FaHome size={14} /> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            <FaInfoCircle size={14} /> About
          </NavLink>

          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            <FaTools size={14} /> Complaints
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            <FaPhoneAlt size={14} /> Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full p-6 animate-slideDown">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">Menu</span>
              <button
                className="text-2xl text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineClose />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-8 text-gray-800 font-medium text-lg">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaHome /> Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaInfoCircle /> About Us
              </Link>

              <Link
                to="/book-plumber"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaTools /> Book Plumber
              </Link>

              <Link
                to="/complaints"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaTools /> Complaints
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaPhoneAlt /> Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
