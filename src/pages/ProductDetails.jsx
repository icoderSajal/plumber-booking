// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { useEffect, useState } from "react";

// const ALL_PRODUCTS = [
//   // PVC
//   {
//     _id: "1",
//     name: "PVC Pipe 4 Inch",
//     price: 1050,
//     image: "/images/pvc-pipe.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "2",
//     name: "PVC Pipe 3 Inch",
//     price: 900,
//     image: "/images/3pipe.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "3",
//     name: "PVC Pipe 2 Inch",
//     price: 600,
//     image: "/images/2pvcpipe.jpeg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "4",
//     name: "PVC Pipe 1¼ Inch",
//     price: 450,
//     image: "/images/savainchpipe.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "5",
//     name: "PVC Elbow 4 Inch",
//     price: 80,
//     image: "/images/4inchElbow.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "6",
//     name: "PVC Elbow 3 Inch",
//     price: 60,
//     image: "/images/4inchElbow.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "7",
//     name: "PVC Elbow 2 Inch",
//     price: 45,
//     image: "/images/2inchelbow.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "8",
//     name: "PVC Elbow 1¼ Inch",
//     price: 25,
//     image: "/images/2inchelbow.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "9",
//     name: "PVC Tee 4 Inch",
//     price: 110,
//     image: "/images/teepvc.png",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "10",
//     name: "PVC Y Tee 4 Inch",
//     price: 330,
//     image: "/images/ytee.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "11",
//     name: "PVC Hubset 4 Inch",
//     price: 300,
//     image: "/images/hubset.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "12",
//     name: "PVC P-Trap 4 Inch",
//     price: 300,
//     image: "/images/ptrap.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "13",
//     name: "PVC NaniTrap 4 × 3 Inch",
//     price: 280,
//     image: "/images/nanitrap.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "14",
//     name: "PVC Socket 4 Inch",
//     price: 80,
//     image: "/images/pvcsoket.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "15",
//     name: "PVC Socket 3 Inch",
//     price: 60,
//     image: "/images/upvcsoket.jpg",
//     category: "pvc",
//     brand: "Birla",
//     offer: "0 %",
//   },

//   // CPVC
//   {
//     _id: "16",
//     name: "CPVC Pipe 3/4 Inch",
//     price: 180,
//     image: "/images/cpvcpipe.jpg",
//     category: "cpvc",
//     brand: "Astral",
//     offer: "0 %",
//   },
//   {
//     _id: "17",
//     name: "CPVC Pipe 1 Inch",
//     price: 280,
//     image: "/images/cpvcpipe.jpg",
//     category: "cpvc",
//     brand: "Astral",
//     offer: "0 %",
//   },
//   {
//     _id: "18",
//     name: "CPVC Elbow 3/4 Inch",
//     price: 35,
//     image: "/images/elbow.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "19",
//     name: "CPVC Tee 3/4 Inch",
//     price: 45,
//     image: "/images/teecpvc.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "20",
//     name: "CPVC Elbow 1 × 1/2 Inch",
//     price: 90,
//     image: "/images/elbowb.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "21",
//     name: "CPVC Tee 1 × 1/2 Inch",
//     price: 110,
//     image: "/images/teecpvcb.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "22",
//     name: "CPVC MTA 1 × 1/2 Inch",
//     price: 130,
//     image: "/images/cpvcmta.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "23",
//     name: "CPVC FTA 1 × 1/2 Inch",
//     price: 150,
//     image: "/images/cpvcfta.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "24",
//     name: "CPVC Tank Nipple 1 Inch",
//     price: 80,
//     image: "/images/tanknipplecpvc.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "25",
//     name: "CPVC Socket 3/4 Inch",
//     price: 15,
//     image: "/images/cpvcsoket.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "26",
//     name: "CPVC Socket 1 Inch",
//     price: 25,
//     image: "/images/cpvcsoket.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "27",
//     name: "CPVC Union 1 Inch",
//     price: 89,
//     image: "/images/cpvcunion.jpg",
//     category: "cpvc",
//     brand: "Birla",
//     offer: "0 %",
//   },

//   // UPVC
//   {
//     _id: "28",
//     name: "UPVC Pipe 3/4 Inch",
//     price: 160,
//     image: "/images/upvcpipe.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "29",
//     name: "UPVC Elbow 3/4 Inch",
//     price: 20,
//     image: "/images/upvcelbow.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "30",
//     name: "UPVC Elbow 3/4 × 1/2 Inch",
//     price: 60,
//     image: "/images/upvcbelbow.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "31",
//     name: "UPVC Tee 3/4 Inch",
//     price: 30,
//     image: "/images/upvctee.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "32",
//     name: "UPVC Tee 3/4 × 1/2 Inch",
//     price: 70,
//     image: "/images/upvcteeb.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "33",
//     name: "UPVC Tank Nipple 3/4 Inch",
//     price: 70,
//     image: "/images/upvctanknipple.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "34",
//     name: "UPVC Union 3/4 Inch",
//     price: 70,
//     image: "/images/unionupvc.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "35",
//     name: "UPVC MTA 3/4 × 1/2 Inch",
//     price: 79,
//     image: "/images/mtaupvc.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "36",
//     name: "UPVC FTA 3/4 × 1/2 Inch",
//     price: 79,
//     image: "/images/upvcfta.jpg",
//     category: "upvc",
//     brand: "Birla",
//     offer: "0 %",
//   },

//   // WASH BASIN
//   {
//     _id: "37",
//     name: "Wash Basin 24 × 18",
//     price: 2700,
//     image: "/images/washbasinwithpedestal.jpg",
//     category: "washbasin",
//     brand: "Aquatop",
//     offer: "0 %",
//   },
//   {
//     _id: "38",
//     name: "Wash Basin 24 × 18",
//     price: 4999,
//     image: "/images/cera.jpg",
//     category: "washbasin",
//     brand: "Aquatop",
//     offer: "0 %",
//   },
//   {
//     _id: "39",
//     name: "Wall Hung Wash Basin",
//     price: 1899,
//     image: "/images/washbasin.png",
//     category: "washbasin",
//     brand: "Cera",
//     offer: "0 %",
//   },
//   {
//     _id: "40",
//     name: "Table Top Wash Basin",
//     price: 8299,
//     image: "/images/table.png",
//     category: "washbasin",
//     brand: "Cera",
//     offer: "0 %",
//   },
//   {
//     _id: "41",
//     name: "Single Suit Wash Basin",
//     price: 5599,
//     image: "/images/single.jpg",
//     category: "washbasin",
//     brand: "Cera",
//     offer: "0 %",
//   },
//   {
//     _id: "42",
//     name: "Vanity Wash Basin",
//     price: 9999,
//     image: "/images/vanity.jpg",
//     category: "washbasin",
//     brand: "Jaquar",
//     offer: "0 %",
//   },

//   // TOILET
//   {
//     _id: "43",
//     name: "Indian Toilet Seat 20 Inch",
//     price: 999,
//     image: "/images/indian.jpg",
//     category: "toilet",
//     brand: "Cava",
//     offer: "0 %",
//   },
//   {
//     _id: "44",
//     name: "Indian Toilet Seat 23 Inch",
//     price: 1299,
//     image: "/images/indian.jpg",
//     category: "toilet",
//     brand: "Cava",
//     offer: "0 %",
//   },
//   {
//     _id: "45",
//     name: "Two Piece English Toilet Seat",
//     price: 2799,
//     image: "/images/west1.jpg",
//     category: "toilet",
//     brand: "Aquatop",
//     offer: "0 %",
//   },
//   {
//     _id: "46",
//     name: "One Piece English Toilet Seat",
//     price: 7299,
//     image: "/images/west2.png",
//     category: "toilet",
//     brand: "Aquatop",
//     offer: "0 %",
//   },

//   {
//     _id: "47",
//     name: "Wall Hung Toilet Seat",
//     price: 14599,
//     image: "/images/wallhung.jpg",
//     category: "toilet",
//     brand: "Jaquar",
//     offer: "0 %",
//   },

//   // BATHROOM TAPS
//   {
//     _id: "48",
//     name: "Swan Neck 9 Inch Bend",
//     price: 1299,
//     image: "/images/swantab.jpg",
//     category: "bathroom-taps",
//     brand: "Birla",
//     offer: "0 %",
//   },
//   {
//     _id: "49",
//     name: "Sink Cock 9 Inch Bend",
//     price: 1399,
//     image: "/images/sinktab.jpg",
//     category: "bathroom-taps",
//     brand: "Country Gold",
//     offer: "0 %",
//   },
//   {
//     _id: "50",
//     name: "Nozzle Cock",
//     price: 499,
//     image: "/images/nozeltab.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "51",
//     name: "Nozzle Cock",
//     price: 599,
//     image: "/images/washtab.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "52",
//     name: "Angle Valve Brass",
//     price: 399,
//     image: "/images/angelb.jpg",
//     category: "bathroom-taps",
//     brand: "Gravity",
//     offer: "0 %",
//   },
//   {
//     _id: "53",
//     name: "2 Way Big Cock Brass",
//     price: 999,
//     image: "/images/2waybigcock.jpg",
//     category: "bathroom-taps",
//     brand: "Gravity",
//     offer: "0 %",
//   },
//   {
//     _id: "54",
//     name: "Long Body Brass",
//     price: 799,
//     image: "/images/longbody.jpg",
//     category: "bathroom-taps",
//     brand: "Gravity",
//     offer: "0 %",
//   },
//   {
//     _id: "55",
//     name: "Short Body Brass",
//     price: 699,
//     image: "/images/shortbody.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "56",
//     name: "Short Body PVC",
//     price: 69,
//     image: "/images/pvcshortbody.jpg",
//     category: "pvc-bathroom-taps",
//     brand: "CK",
//     offer: "0 %",
//   },
//   {
//     _id: "57",
//     name: "Short Body PVC Long",
//     price: 89,
//     image: "/images/pvclongbody.jpg",
//     category: "pvc-bathroom-taps",
//     brand: "CK",
//     offer: "0 %",
//   },

//   // PVC TANK
//   {
//     _id: "58",
//     name: "PVC Water Tank 500 L",
//     price: 2800,
//     image:
//       "https://5.imimg.com/data5/SELLER/Default/2023/12/367319833/RD/XY/LR/15564909/3-layer-water-tank-eco-500x500.jpg",
//     category: "pvc-tanks",
//     brand: "Aplapollo NEO",
//     offer: "0 %",
//   },
//   {
//     _id: "59",
//     name: "PVC Water Tank 750 L",
//     price: 3800,
//     image: "/images/tank.jpg",
//     category: "pvc-tanks",
//     brand: "Aplapollo NEO",
//     offer: "0 %",
//   },
//   //accessories
//   {
//     _id: "60",
//     name: "Brass PVC connection 18 Inch",
//     price: 180,
//     image: "/images/pvccon.jpg",
//     category: "accessories",
//     brand: "Plasto",
//     offer: "0 %",
//   },
//   {
//     _id: "61",
//     name: "4,3,2 inch Jali Sada",
//     price: 50,
//     image: "/images/jali.jpg",
//     category: "accessories",
//     brand: "Vistro",
//     offer: "0 %",
//   },
//   {
//     _id: "62",
//     name: "4,3,2 inch Cut Jali",
//     price: 50,
//     image: "/images/cutjali.jpg",
//     category: "accessories",
//     brand: "Vistro",
//     offer: "0 %",
//   },
//   {
//     _id: "63",
//     name: "CP Extension Nipple 1,1.5,2.5 Inch",
//     price: "90,110, 140",
//     image: "/images/extension.jpg",
//     category: "accessories",
//     brand: "Vistro",
//     offer: "0 %",
//   },
//   {
//     _id: "64",
//     name: "Disc Phase",
//     price: 90,
//     image: "/images/dics.jpg",
//     category: "accessories",
//     brand: "Vistro",
//     offer: "0 %",
//   },
//   {
//     _id: "65",
//     name: "Pillar Cock",
//     price: 599,
//     image: "/images/pillar.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "66",
//     name: "Brass Conseal 1/2 inch ",
//     price: 999,
//     image: "/images/conseal.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "67",
//     name: "2 Way Angle Cock",
//     price: 899,
//     image: "https://m.media-amazon.com/images/I/61-3SXpEOIL.jpg",
//     category: "bathroom-taps",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "68",
//     name: "Single Suit",
//     price: 6000,
//     image: "/images/damru-washbasin.png",
//     category: "washbasin",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "69",
//     name: "TABLE TOP ZXTT/576",
//     price: 9999,
//     image: "/washbasin/wash14.jpeg",
//     category: "washbasin",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "70",
//     name: "TABLE TOP ZXTT/646",
//     price: 10500,
//     image: "/washbasin/wash13.jpeg",
//     category: "washbasin",
//     brand: "Vikson",
//     offer: "0 %",
//   },
//   {
//     _id: "71",
//     name: "TABLE TOP ZXTT/442",
//     price: 8800,
//     image: "/washbasin/wash12.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "72",
//     name: "TABLE TOP NS-713",
//     price: 3450,
//     image: "/washbasin/wash11.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "73",
//     name: "TABLE TOP NS-212",
//     price: 4000,
//     image: "/washbasin/wash10.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "74",
//     name: "TABLE TOP NS-119",
//     price: 3100,
//     image: "/washbasin/wash9.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "75",
//     name: "TABLE TOP ZXTT-042",
//     price: 7000,
//     image: "/washbasin/wash8.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "76",
//     name: "TABLE TOP 1238WG9",
//     price: 8000,
//     image: "/washbasin/wash7.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "77",
//     name: "TABLE TOP ZXTT-077",
//     price: 7500,
//     image: "/washbasin/wash6.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "78",
//     name: "VANITY PU-2530",
//     price: "10500",
//     image: "/washbasin/wash5.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "79",
//     name: "VANITY HD-5005",
//     price: "10500",
//     image: "/washbasin/wash4.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "80",
//     name: "VANITY PU-2516",
//     price: "10500",
//     image: "/washbasin/wash3.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "81",
//     name: "VANITY PU-2520",
//     price: "10500",
//     image: "/washbasin/wash2.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
//   {
//     _id: "82",
//     name: "VANITY PU-2410 BLUE B",
//     price: "10500",
//     image: "/washbasin/wash1.jpeg",
//     category: "washbasin",
//     brand: "marble",
//     offer: "30% OFF",
//   },
// ];

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const found = ALL_PRODUCTS.find((p) => p._id === id);
//     setProduct(found);
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center">
//           <p className="text-gray-500 text-lg">Product not found</p>
//         </div>
//       </>
//     );
//   }
//   const productUrl = `${window.location.origin}/product/${product._id}`;
//   //https://plumber-booking.vercel.app/product/26

//   return (
//     <>
//       <Navbar />

//       <section className="bg-gray-100 min-h-screen py-10">
//         <div className="max-w-6xl mx-auto px-4">
//           {/* Breadcrumb */}
//           <div className="text-sm text-gray-500 mb-4">
//             <Link to="/" className="hover:text-blue-600">
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <Link
//               to={`/category/${product.category}`}
//               className="capitalize hover:text-blue-600"
//             >
//               {product.category.replace("-", " ")}
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-gray-700 font-medium">{product.name}</span>
//           </div>

//           {/* Product Card */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 grid md:grid-cols-2 gap-8">
//             {/* Image */}
//             <div className="flex items-center justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full max-h-[360px] object-contain transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex flex-col justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800">
//                   {product.name}
//                 </h1>

//                 <p className="text-gray-500 mt-2 capitalize">
//                   Category: {product.category.replace("-", " ")}
//                 </p>

//                 <p className="text-2xl font-semibold text-blue-600 mt-4">
//                   ₹{product.price}
//                 </p>

//                 <p className="text-lg font-bold text-red-500 mt-2">
//                   Brand: {product.brand}
//                 </p>

//                 <p className="text-gray-600 mt-5 leading-relaxed">
//                   High quality sanitary and plumbing product suitable for
//                   residential and commercial use. Durable, reliable, and easy to
//                   install.
//                 </p>

//                 {/* Wash Basin Note */}
//                 {product.category === "washbasin" && (
//                   <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
//                     <p className="text-sm text-yellow-800 leading-relaxed">
//                       Note: This product includes only the wash basin. Taps,
//                       bottle trap, waste coupling, and waste pipe are not
//                       included and must be purchased separately.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Actions */}
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <a
//                   href="tel:9205448629"
//                   className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Call to Order
//                 </a>

//                 <a
//                   href={`https://wa.me/919205448629?text=${encodeURIComponent(
//                     `\n\n${product.name}\nPrice: ₹${product.price}\nBrand: ${product.brand}\n\n Hello, I am Interested this Product\n\nProduct Link:\n${productUrl}`,
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 text-center border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition"
//                 >
//                   WhatsApp Inquiry
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";

/* ---------- Helper Functions ---------- */
const getDiscountPercent = (offer) => {
  if (!offer) return 0;
  const match = offer.match(/\d+/);
  return match ? Number(match[0]) : 0;
};

const getFinalPrice = (price, discount) => {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = ALL_PRODUCTS.find((p) => p._id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-gray-500">Product not found</div>
      </>
    );
  }

  const discountPercent = getDiscountPercent(product.offer);
  const finalPrice = getFinalPrice(Number(product.price), discountPercent);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <p className="text-lg text-gray-500 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          /
          <Link
            to={`/category/${product.category}`}
            className="hover:underline ml-1"
          >
            {product.category.replaceAll("-", " ")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-green-600 font-medium">{product.name}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          {/* <div className="border rounded-lg p-6 bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-contain"
            />
          </div> */}

          {/* Image */}
          <div className="border rounded-lg p-6 bg-white overflow-hidden group">
            <div className="relative w-full h-80 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-zoom-in"
              />
            </div>

            <p className="text-center text-sm text-gray-500 mt-3">
              Hover to zoom
            </p>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-2">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>

            {/* Price Section */}
            <div className="mt-6">
              {discountPercent > 0 ? (
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold text-green-600">
                    ₹{finalPrice}
                  </p>

                  <p className="text-lg text-gray-500 line-through">
                    ₹{product.price}
                  </p>

                  <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded">
                    {discountPercent}% OFF
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-bold text-blue-600">
                  ₹{product.price}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 leading-relaxed">
              High-quality sanitary and plumbing product suitable for
              residential and commercial use. Durable material, easy
              installation, and long-lasting performance.
            </p>
            {/* Delivery Note */}
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Delivery Information:</span>{" "}
                This product is available for delivery{" "}
                <span className="font-semibold">only within Bareilly city</span>
                . For outside locations, please contact us for assistance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:9205448629"
                className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Call to Order
              </a>
              <a
                href={`https://wa.me/919205448629?text=Hello, I want to enquire about ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Enquire on WhatsApp
              </a>

              <Link
                to={`/category/${product.category}`}
                className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Back to Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
