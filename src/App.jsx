import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BookPlumber from "./pages/BookPlumber";
import ProductsByCategory from "./pages/ProductsByCategory";
// Admin pages
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./dashboard/Dashboard";
import AddAdmin from "./dashboard/AddAdmin";
import AddPlumber from "./dashboard/AddPlumber";
import Complaints from "./dashboard/Complaints";
import Queries from "./dashboard/Queries";
import CategoryProducts from "./pages/CategoryProducts";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-plumber" element={<BookPlumber />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<ProductsByCategory />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin Pages (Nested under AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="add-admin" element={<AddAdmin />} />{" "}
          {/* /admin/add-admin */}
          <Route path="add-plumber" element={<AddPlumber />} />{" "}
          {/* /admin/add-plumber */}
          <Route path="complaints" element={<Complaints />} />{" "}
          {/* /admin/complaints */}
          <Route path="queries" element={<Queries />} /> {/* /admin/queries */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
