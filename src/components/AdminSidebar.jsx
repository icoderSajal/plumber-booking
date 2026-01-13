import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const AdminSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-blue-600">Admin Panel</h2>
          <button className="md:hidden text-xl" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 text-sm font-medium">
          <Link
            to="/admin"
            onClick={onClose}
            className="block px-4 py-2 rounded hover:bg-blue-50"
          >
            Dashboard
          </Link>

          {/* <Link
            to="/admin/add-admin"
            onClick={onClose}
            className="block px-4 py-2 rounded hover:bg-blue-50"
          >
            Add New Admin
          </Link>

          <Link
            to="/admin/add-plumber"
            onClick={onClose}
            className="block px-4 py-2 rounded hover:bg-blue-50"
          >
            Add New Plumber
          </Link> */}

          <Link
            to="/admin/complaints"
            onClick={onClose}
            className="block px-4 py-2 rounded hover:bg-blue-50"
          >
            All Complaints
          </Link>

          <Link
            to="/admin/queries"
            onClick={onClose}
            className="block px-4 py-2 rounded hover:bg-blue-50"
          >
            All Queries
          </Link>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
