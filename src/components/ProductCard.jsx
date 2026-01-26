// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-contain mb-3"
//       />

//       <h3 className="font-semibold text-gray-800">{product.name}</h3>

//       {/* Offer Tag */}
//       <span className=" top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
//         {product.offer}
//       </span>

//       <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>

//       <Link
//         to={`/product/${product._id}`}
//         className="mt-3 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   // extract number from offer like "30% OFF" or "0 %"
//   const offerValue = parseInt(product.offer);

//   return (
//     <div className="relative bg-white rounded-xl shadow hover:shadow-xl transition p-4 group">
//       {/* Offer badge (only if offer > 0) */}
//       {offerValue > 0 && (
//         <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
//           {product.offer}
//         </span>
//       )}

//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
//       />

//       <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
//         {product.name}
//       </h3>

//       <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>

//       <Link
//         to={`/product/${product._id}`}
//         className="mt-3 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ product }) => {
  const { name, price, discount, image, brand } = product;

  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative">
      {hasDiscount && (
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {discount}% OFF
        </span>
      )}

      <img src={image} alt={name} className="h-40 w-full object-contain mb-4" />

      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{brand}</p>

      <div className="flex items-center gap-2">
        {hasDiscount && (
          <span className="text-gray-400 line-through text-sm">₹{price}</span>
        )}

        <span className="text-lg font-bold text-green-600">
          ₹{discountedPrice}
        </span>
      </div>

      {hasDiscount && (
        <p className="text-xs text-green-700 mt-1">
          You save {discount}% on this product
        </p>
      )}
    </div>
  );
};

export default ProductCard;
