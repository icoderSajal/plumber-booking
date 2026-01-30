import React from "react";

const brands = [
  { name: "Astral", logo: "/brands/astral.png" },
  { name: "Birla", logo: "/brands/birla.jpg" },
  { name: "Ashirwad", logo: "/brands/ashirwad.jpg" },
  { name: "Ganga", logo: "/brands/ganga.jpg" },
  { name: "Apollo", logo: "/brands/apollo.png" },
  { name: "Cera", logo: "/brands/cera.jpg" },
  { name: "Jaquar", logo: "/brands/jaquar.jpg" },
  { name: "Aquatop", logo: "/brands/aquatop.jpg" },
  { name: "Plumber", logo: "/brands/plumber.jpg" },
];

const BrandsWeDealWith = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Brands We Deal With
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto">
          We work with reliable sanitary, bathroom and plumbing brands trusted
          by professionals.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {brands.map((brand, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div
                className="
                  w-32 h-32
                  rounded-2xl
                  bg-white/70
                  backdrop-blur
                  border border-gray-100
                  shadow-md
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:-translate-y-2
                  group-hover:shadow-xl
                  group-hover:scale-105
                "
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <span className="mt-4 text-sm font-semibold text-gray-700 tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeDealWith;
