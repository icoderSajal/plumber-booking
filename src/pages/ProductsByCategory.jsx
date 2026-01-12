import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const ProductsByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Later replace this with API call
    const allProducts = [
      {
        _id: "1",
        name: "PVC Pipe 1 Inch Heavy",
        price: 220,
        image: "/images/washbasin.png",
        category: "pvc",
      },
      {
        _id: "2",
        name: "CPVC Elbow 1/2 Inch",
        price: 120,
        image: "/images/washbasin.png",
        category: "cpvc",
      },
      {
        _id: "3",
        name: "UPVC Pipe 2 Inch",
        price: 480,
        image: "/images/washbasin.png",
        category: "upvc",
      },
      {
        _id: "4",
        name: "Wash Basin With Pedestal",
        price: 3200,
        image: "/images/washbasin.png",
        category: "washbasin",
      },
      {
        _id: "5",
        name: "Western Toilet Wall Hung",
        price: 8500,
        image: "/images/washbasin.png",
        category: "toilet",
      },
      {
        _id: "6",
        name: "Swan Neck Sink Cock",
        price: 1450,
        image: "/images/washbasin.png",
        category: "bathroom-taps",
      },
      {
        _id: "7",
        name: "Angle Valve Brass",
        price: 260,
        image: "/images/washbasin.png",
        category: "accessories",
      },
    ];

    const filtered = allProducts.filter((item) => item.category === category);

    setProducts(filtered);
  }, [category]);

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 min-h-screen">
        {/* Category Bar */}
        <CategoryBar />

        {/* Products */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 capitalize">
            {category.replace("-", " ")}
          </h2>

          {products.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No products available in this category.
            </div>
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

export default ProductsByCategory;
