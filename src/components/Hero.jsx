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

const Hero = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Abhiyaan Sanitary & Plumber Service
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Trusted Plumbing Services in Bareilly & Nearby Areas
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          to="/book-plumber"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          <FaPhoneAlt /> Book Plumber
        </Link>

        <Link
          href="https://wa.me/918218566367"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600"
        >
          <FaWhatsapp /> WhatsApp
        </Link>
      </div>
    </section>
  );
};

export default Hero;
