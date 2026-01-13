import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ceramicProducts = [
  {
    id: 1,
    name: "Wash Basin",
    image: "/images/washbasin.png",
    price: "₹2,500",
  },
  {
    id: 2,
    name: "Indian Toilet Seat",
    image: "/images/indian.jpg",
    price: "₹800",
  },
  {
    id: 3,
    name: "Western One Piece Seat",
    image: "/images/west2.png",
    price: "₹6,500",
  },
  {
    id: 4,
    name: "Western Two Piece Seat",
    image: "/images/west1.jpg",
    price: "₹3,500",
  },
  {
    id: 5,
    name: "Bathroom Tap",
    image: "/images/bath1.jpg",
    price: "₹1,200",
  },
  {
    id: 6,
    name: "Tanks 500 L",
    image: "/images/tank.jpg",
    price: "₹2800",
  },
];

const Carousel = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Ceramic & Bathroom Essentials
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {ceramicProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                {/* Image Box */}
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 font-bold mt-2">{item.price}</p>

                  {/* <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    View Product
                  </button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
