// import { useNavigate } from "react-router-dom";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useTexture, Environment } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// /* =======================
//    3D PRODUCT CARD
// ======================= */
// function ProductCard() {
//   const ref = useRef();
//   const texture = useTexture("/images/greenwash1.png");

//   useFrame(({ mouse, clock }) => {
//     if (!ref.current) return;

//     // Mouse tilt
//     ref.current.rotation.y = THREE.MathUtils.lerp(
//       ref.current.rotation.y,
//       mouse.x * 0.35,
//       0.06,
//     );
//     ref.current.rotation.x = THREE.MathUtils.lerp(
//       ref.current.rotation.x,
//       -mouse.y * 0.25,
//       0.06,
//     );

//     // Floating animation
//     ref.current.position.y = Math.sin(clock.elapsedTime) * 0.08;
//   });

//   return (
//     <mesh ref={ref} castShadow>
//       <boxGeometry args={[2.8, 4.4, 0.35]} />
//       <meshPhysicalMaterial
//         map={texture}
//         roughness={0.25}
//         metalness={0.25}
//         clearcoat={0.8}
//         clearcoatRoughness={0.15}
//         reflectivity={0.6}
//       />
//     </mesh>
//   );
// }

// /* =======================
//    MAIN HERO SECTION
// ======================= */
// const ProductHero = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.wrapper}>
//         {/* TEXT SIDE */}
//         <div style={styles.content}>
//           <p style={styles.kicker}>Bathroom Collection</p>

//           <h1 style={styles.title}>
//             One-Piece <br /> English Toilet Seat
//           </h1>

//           <p style={styles.desc}>
//             Designed with premium ceramic glazing and a rich dark-green finish.
//             Built for durability, elegance, and modern luxury bathrooms.
//           </p>

//           <ul style={styles.list}>
//             <li>High-density ceramic body</li>
//             <li>Scratch & stain resistant glaze</li>
//             <li>Soft-close precision seat</li>
//             <li>Modern one-piece design</li>
//           </ul>

//           <button style={styles.button}>View Specifications</button>
//         </div>

//         {/* 3D SIDE */}
//         <div style={styles.canvas}>
//           <Canvas shadows camera={{ position: [0, 0.2, 5], fov: 35 }}>
//             <ambientLight intensity={0.6} />

//             <spotLight
//               position={[5, 8, 5]}
//               angle={0.3}
//               penumbra={1}
//               intensity={1.4}
//               castShadow
//             />

//             <directionalLight position={[-5, 5, 5]} intensity={0.8} />

//             <ProductCard />

//             {/* Shadow Floor */}
//             <mesh
//               rotation={[-Math.PI / 2, 0, 0]}
//               position={[0, -2.4, 0]}
//               receiveShadow
//             >
//               <planeGeometry args={[10, 10]} />
//               <shadowMaterial opacity={0.18} />
//             </mesh>

//             <Environment preset="studio" />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-blue-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           Professional Plumbing Services
//         </h2>

//         <p className="text-gray-600 mb-6">
//           Trusted plumbers for home and commercial needs
//         </p>

//         <button
//           onClick={() => navigate("/book-plumber")}
//           className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//         >
//           Book a Plumber
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: "Tap Repair",
      image:
        "https://media.istockphoto.com/id/659517058/photo/installing-a-shower-faucet.jpg?s=612x612&w=0&k=20&c=NpxRKZ7avBdxLb_KCkeQ2W69tAcbLCAwShPvM5kJ7NM=",
      desc: "Professional tap repair and installation services.",
    },
    {
      name: "Bathroom Fitting",
      image:
        "https://media.istockphoto.com/id/918319088/photo/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept.jpg?s=612x612&w=0&k=20&c=eYng98h3oV3RZCJBngyj8vPAGLOnnkf7MMa9klg_JS0=",
      desc: "Complete bathroom fitting and installation.",
    },
    {
      name: "Pipe Leakage",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800",
      desc: "Quick detection and repair of pipe leakages.",
    },
    {
      name: "Toilet Repair",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
      desc: "Toilet blockage and repair services.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Abhiyaan Sanitary & Plumber Service
          </h1>

          <p className="text-lg text-gray-600">
            Trusted Plumbing Services in Bareilly & Nearby Areas
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500 px-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>

                <p className="text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-6xl mx-auto text-center px-6 mt-16">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold text-xl mb-2">1. Book Service</h3>
              <p>Fill the booking form or contact on WhatsApp.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">2. Technician Assigned</h3>
              <p>Our plumber will contact you quickly.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">3. Problem Fixed</h3>
              <p>Fast and professional plumbing service.</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-12">
          <Link
            to="/book-plumber"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaPhoneAlt />
            Book Plumber
          </Link>

          <a
            href="https://wa.me/919205448629"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
