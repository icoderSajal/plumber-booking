import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  // Dummy data (replace with API later)
  useEffect(() => {
    setProducts([
      {
        _id: "1",
        name: "CPVC Elbow 1/2 Inch",
        price: 120,
        image: "/images/washbasin.png",
        category: "cpvc",
      },
      {
        _id: "2",
        name: "Swan Neck Kitchen Tap",
        price: 1450,
        image: "/images/swan-neck.png",
        category: "bathroom-taps",
      },
      {
        _id: "3",
        name: "Wall Hung Western Toilet",
        price: 8200,
        image: "/images/western-toilet.png",
        category: "toilet",
      },
    ]);
  }, [category]);

  return (
    <>
      <Navbar></Navbar>
      <section className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 capitalize">
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
