import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = ALL_PRODUCTS.filter(
      (p) => p.category === category,
    ).map((p) => ({
      ...p,
      discount: p.category === "washbasin" || p.category === "toilet" ? 30 : 0,
    }));

    setProducts(filteredProducts);
  }, [category]);

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 uppercase text-blue-600">
            {category.replace("-", " ")}
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
