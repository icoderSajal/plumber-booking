import { useState } from "react";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-2xl mb-4"
            onClick={() => setSidebarOpen(true)}
          >
            <GiHamburgerMenu />
          </button>

          {/* Render admin page here */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
