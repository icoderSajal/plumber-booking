import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const ALL_PRODUCTS = [
  {
    _id: "1",
    name: "PVC Pipe 4 Inch",
    price: 1000,
    image: "/images/pvc-pipe.jpg",
    category: "pvc",
  },
  {
    _id: "2",
    name: "PVC Pipe 3 Inch",
    price: 900,
    image: "/images/3pipe.jpg",
    category: "pvc",
  },
  {
    _id: "3",
    name: "PVC Pipe 2 Inch",
    price: 600,
    image: "/images/2pvcpipe.jpeg",
    category: "pvc",
  },
  {
    _id: "4",
    name: "PVC Pipe 1¼ Inch",
    price: 450,
    image: "/images/savainchpipe.jpg",
    category: "pvc",
  },
  {
    _id: "5",
    name: "4 inch PVC Elbow",
    price: 80,
    image: "/images/4inchElbow.jpg",
    category: "pvc",
  },
  {
    _id: "6",
    name: "3 inch PVC Elbow",
    price: 60,
    image: "/images/4inchElbow.jpg",
    category: "pvc",
  },
  {
    _id: "7",
    name: "2 inch PVC Elbow",
    price: 45,
    image: "/images/2inchelbow.jpg",
    category: "pvc",
  },
  {
    _id: "8",
    name: "1¼ inch PVC Elbow",
    price: 25,
    image: "/images/2inchelbow.jpg",
    category: "pvc",
  },
  {
    _id: "9",
    name: "CPVC 3/4 inch pipe",
    price: 180,
    image: "/images/cpvcpipe.jpg",
    category: "cpvc",
  },
  {
    _id: "10",
    name: "CPVC 1 inch pipe",
    price: 280,
    image: "/images/cpvcpipe.jpg",
    category: "cpvc",
  },
  {
    _id: "11",
    name: "CPVC Elbow 3/4 inch",
    price: 35,
    image: "/images/elbow.jpg",
    category: "cpvc",
  },
  {
    _id: "11",
    name: "CPVC Tee 3/4 inch",
    price: 45,
    image: "/images/teecpvc.jpg",
    category: "cpvc",
  },
  {
    _id: "12",
    name: "CPVC elbow 1 * 1/2 inch",
    price: 90,
    image: "/images/elbowb.jpg",
    category: "cpvc",
  },
  {
    _id: "13",
    name: "CPVC Tee 1 * 1/2 inch",
    price: 110,
    image: "/images/teecpvcb.jpg",
    category: "cpvc",
  },
  {
    _id: "14",
    name: "CPVC MTA 1 * 1/2 inch",
    price: 130,
    image: "/images/cpvcmta.jpg",
    category: "cpvc",
  },
  {
    _id: "15",
    name: "CPVC FTA 1 * 1/2 inch",
    price: 150,
    image: "/images/cpvcfta.jpg",
    category: "cpvc",
  },
  {
    _id: "16",
    name: "CPVC Union 1 inch",
    price: 90,
    image: "/images/cpvcunion.jpg",
    category: "cpvc",
  },
  {
    _id: "17",
    name: "CPVC Tank Nippe 1 inch",
    price: 80,
    image: "/images/tanknipplecpvc.jpg",
    category: "cpvc",
  },
  {
    _id: "18",
    name: "CPVC Tank Nippe 1 inch",
    price: 80,
    image: "/images/tanknipplecpvc.jpg",
    category: "cpvc",
  },
  {
    _id: "19",
    name: "UPVC Pipe 3/4 inch",
    price: 160,
    image: "/images/upvcpipe.jpg",
    category: "upvc",
  },
  {
    _id: "20",
    name: "UPVC Elbow 3/4 inch",
    price: 20,
    image: "/images/upvcelbow.jpg",
    category: "upvc",
  },
  {
    _id: "20",
    name: "UPVC Elbow 3/4 * 1/2 inch",
    price: 60,
    image: "/images/upvcbelbow.jpg",
    category: "upvc",
  },
  {
    _id: "21",
    name: "UPVC Tee 3/4 inch",
    price: 30,
    image: "/images/upvctee.jpg",
    category: "upvc",
  },
  {
    _id: "22",
    name: "UPVC Tee 3/4 * 1/2 inch",
    price: 70,
    image: "/images/upvcteeb.jpg",
    category: "upvc",
  },
  {
    _id: "23",
    name: "UPVC Tank Nipple 3/4 inch",
    price: 70,
    image: "/images/upvctanknipple.jpg",
    category: "upvc",
  },
  {
    _id: "24",
    name: "UPVC Union 3/4 inch",
    price: 70,
    image: "/images/unionupvc.jpg",
    category: "upvc",
  },
  {
    _id: "25",
    name: "UPVC MTA 3/4 * 1/2 inch",
    price: 70,
    image: "/images/upvcfta.jpg",
    category: "upvc",
  },
  {
    _id: "26",
    name: "UPVC FTA 3/4 * 1/2 inch",
    price: 70,
    image: "/images/upvcfta.jpg",
    category: "upvc",
  },
];

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = ALL_PRODUCTS.filter(
      (product) => product.category === category
    );

    setProducts(filteredProducts);
  }, [category]);

  return (
    <>
      <Navbar />

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
