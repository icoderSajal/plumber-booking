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
    brand: "Birla",
  },
  {
    _id: "2",
    name: "PVC Pipe 3 Inch",
    price: 900,
    image: "/images/3pipe.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "3",
    name: "PVC Pipe 2 Inch",
    price: 600,
    image: "/images/2pvcpipe.jpeg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "4",
    name: "PVC Pipe 1¼ Inch",
    price: 450,
    image: "/images/savainchpipe.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "5",
    name: "4 inch PVC Elbow",
    price: 80,
    image: "/images/4inchElbow.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "6",
    name: "3 inch PVC Elbow",
    price: 60,
    image: "/images/4inchElbow.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "7",
    name: "2 inch PVC Elbow",
    price: 45,
    image: "/images/2inchelbow.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "8",
    name: "1¼ inch PVC Elbow",
    price: 25,
    image: "/images/2inchelbow.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "9",
    name: "CPVC 3/4 inch pipe",
    price: 180,
    image: "/images/cpvcpipe.jpg",
    category: "cpvc",
    brand: "Astral",
  },
  {
    _id: "10",
    name: "CPVC 1 inch pipe",
    price: 280,
    image: "/images/cpvcpipe.jpg",
    category: "cpvc",
    brand: "Astral",
  },
  {
    _id: "11",
    name: "CPVC Elbow 3/4 inch",
    price: 35,
    image: "/images/elbow.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "12",
    name: "CPVC Tee 3/4 inch",
    price: 45,
    image: "/images/teecpvc.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "13",
    name: "CPVC elbow 1 * 1/2 inch",
    price: 90,
    image: "/images/elbowb.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "14",
    name: "CPVC Tee 1 * 1/2 inch",
    price: 110,
    image: "/images/teecpvcb.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "15",
    name: "CPVC MTA 1 * 1/2 inch",
    price: 130,
    image: "/images/cpvcmta.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "16",
    name: "CPVC FTA 1 * 1/2 inch",
    price: 150,
    image: "/images/cpvcfta.jpg",
    category: "cpvc",
    brand: "Birla",
  },

  {
    _id: "17",
    name: "CPVC Tank Nippe 1 inch",
    price: 80,
    image: "/images/tanknipplecpvc.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "18",
    name: "UPVC Pipe 3/4 inch",
    price: 160,
    image: "/images/upvcpipe.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "19",
    name: "UPVC Elbow 3/4 inch",
    price: 20,
    image: "/images/upvcelbow.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "20",
    name: "UPVC Elbow 3/4 * 1/2 inch",
    price: 60,
    image: "/images/upvcbelbow.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "21",
    name: "UPVC Tee 3/4 inch",
    price: 30,
    image: "/images/upvctee.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "22",
    name: "UPVC Tee 3/4 * 1/2 inch",
    price: 70,
    image: "/images/upvcteeb.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "23",
    name: "UPVC Tank Nipple 3/4 inch",
    price: 70,
    image: "/images/upvctanknipple.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "24",
    name: "UPVC Union 3/4 inch",
    price: 70,
    image: "/images/unionupvc.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "25",
    name: "UPVC MTA 3/4 * 1/2 inch",
    price: 79,
    image: "/images/upvcfta.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "26",
    name: "UPVC FTA 3/4 * 1/2 inch",
    price: 79,
    image: "/images/upvcfta.jpg",
    category: "upvc",
    brand: "Birla",
  },
  {
    _id: "27",
    name: "Wash Basin 24 *18",
    price: 1999,
    image: "/images/washbasinwithpedestal.jpg",
    category: "washbasin",
    brand: "Aquatop",
  },
  {
    _id: "28",
    name: "Wash Basin 24 *18",
    price: 2299,
    image: "/images/cera.jpg",
    category: "washbasin",
    brand: "Aquatop",
  },
  {
    _id: "29",
    name: "Wall Hung Wash Basin",
    price: 1899,
    image: "/images/washbasin.png",
    category: "washbasin",
    brand: "Cera",
  },
  {
    _id: "30",
    name: "Table Top Wash Basin",
    price: 5299,
    image: "/images/table.png",
    category: "washbasin",
    brand: "Cera",
  },
  {
    _id: "31",
    name: "Single Suit Wash Basin",
    price: 5599,
    image: "/images/single.jpg",
    category: "washbasin",
    brand: "Cera",
  },
  {
    _id: "32",
    name: "Single Suit Wash Basin",
    price: 9999,
    image: "/images/vanity.jpg",
    category: "washbasin",
    brand: "Jaquar",
  },
  {
    _id: "33",
    name: "Indian Toilet Seat 20 inch",
    price: 9999,
    image: "/images/indian.jpg",
    category: "toilet",
    brand: "Cava",
  },
  {
    _id: "34",
    name: "Indian Toilet Seat 23 inch",
    price: 899,
    image: "/images/vanity.jpg",
    category: "toilet",
    brand: "Cava",
  },
  {
    _id: "35",
    name: "Two Piece English Toilet Seat",
    price: 2799,
    image: "/images/west1.jpg",
    category: "toilet",
    brand: "Aquatop",
  },
  {
    _id: "36",
    name: "One Piece English Toilet Seat",
    price: 7299,
    image: "/images/west2.png",
    category: "toilet",
    brand: "Aquatop",
  },
  {
    _id: "37",
    name: "Wall Hung Toilet Seat",
    price: 14599,
    image: "/images/wallhung.jpg",
    category: "toilet",
    brand: "Jaquar",
  },
  {
    _id: "38",
    name: "PCV Tee 4 Inch",
    price: 110,
    image: "/images/teepvc.png",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "39",
    name: "PCV YTee 4 Inch",
    price: 330,
    image: "/images/ytee.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "40",
    name: "PCV Hubset 4 Inch",
    price: 300,
    image: "/images/hubset.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "41",
    name: "PCV PTrap 4 Inch",
    price: 300,
    image: "/images/ptrap.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "42",
    name: "PCV PTrap 4 * 3 Inch",
    price: 280,
    image: "/images/nanitrap.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "43",
    name: "PCV Soket 4 Inch",
    price: 80,
    image: "/images/pvcsoket.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "44",
    name: "PCV Soket 3 Inch",
    price: 60,
    image: "/images/upvcsoket.jpg",
    category: "pvc",
    brand: "Birla",
  },
  {
    _id: "45",
    name: "CPCV Soket 3/4 Inch",
    price: 15,
    image: "/images/cpvcsoket.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "46",
    name: "CPCV Soket 1 Inch",
    price: 25,
    image: "/images/cpvcsoket.jpg",
    category: "cpvc",
    brand: "Birla",
  },
  {
    _id: "47",
    name: "Swan Neck 9 inch Bend",
    price: 1299,
    image: "/images/swantab.jpg",
    category: "bathroom-taps",
    brand: "Birla",
  },
  {
    _id: "48",
    name: "Sink Cock 9 inch Bend",
    price: 1399,
    image: "/images/sinktab.jpg",
    category: "bathroom-taps",
    brand: "Country Gold",
  },
  {
    _id: "49",
    name: "Nozel Cock",
    price: 499,
    image: "/images/nozeltab.jpg",
    category: "bathroom-taps",
    brand: "Vikson",
  },
  {
    _id: "50",
    name: "Nozel Cock",
    price: 599,
    image: "/images/washtab.jpg",
    category: "bathroom-taps",
    brand: "Vikson",
  },
  {
    _id: "51",
    name: "Angel Valve Brass",
    price: 399,
    image: "/images/angelb.jpg",
    category: "bathroom-taps",
    brand: "Gravity",
  },
  {
    _id: "52",
    name: "2 Way Big Cock Brass",
    price: 999,
    image: "/images/2waybigcock.jpg",
    category: "bathroom-taps",
    brand: "Gravity",
  },
  {
    _id: "53",
    name: "2 Way Big Cock Brass",
    price: 999,
    image: "/images/2waybigcock.jpg",
    category: "bathroom-taps",
    brand: "Gravity",
  },
  {
    _id: "54",
    name: "Long Body Brass",
    price: 799,
    image: "/images/longbody.jpg",
    category: "bathroom-taps",
    brand: "Gravity",
  },
  {
    _id: "55",
    name: "Short Body Brass",
    price: 699,
    image: "/images/shortbody.jpg",
    category: "bathroom-taps",
    brand: "Vikson",
  },
  {
    _id: "56",
    name: "Short Body PVC",
    price: 69,
    image: "/images/pvcshortbody.jpg",
    category: "pvcbathroom-taps",
    brand: "CK",
  },
  {
    _id: "57",
    name: "Short Body PVC",
    price: 89,
    image: "/images/pvclongbody.jpg",
    category: "pvcbathroom-taps",
    brand: "CK",
  },
  {
    _id: "58",
    name: "CPVC Union 1 inch",
    price: 89,
    image: "/images/cpvcunion.jpg",
    category: "cpvc",
    brand: "Birla",
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
