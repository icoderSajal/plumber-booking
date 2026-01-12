import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/logo.png" alt="PipeMistri" className="h-9 w-auto" />
          <span className="text-lg font-bold text-blue-600 hidden sm:block">
            PipeMistri
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          {/* <Link to="/products" className="hover:text-blue-600">
            Products
          </Link> */}
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          {/* <Link to="/admin" className="hover:text-blue-600">
            Dashboard
          </Link> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40">
          <div className="bg-white w-full p-6 animate-slideDown">
            {/* Close Button */}
            <div className="flex justify-end">
              <button className="text-2xl" onClick={() => setMenuOpen(false)}>
                <AiOutlineClose />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-5 mt-6 text-lg font-medium">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Contact
              </Link>

              {/* <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Dashboard
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
