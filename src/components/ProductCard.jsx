import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-3"
      />

      <h3 className="font-semibold text-gray-800">{product.name}</h3>
      <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>

      <Link
        to={`/product/${product._id}`}
        className="mt-3 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
