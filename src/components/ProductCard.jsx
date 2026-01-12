const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl border hover:shadow-lg transition">
      <div className="h-48 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>

        <button className="mt-3 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
