import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =======================
   3D PRODUCT CARD
======================= */
function ProductCard() {
  const ref = useRef();
  const texture = useTexture("/images/greenwash1.png");

  useFrame(({ mouse, clock }) => {
    if (!ref.current) return;

    // Mouse tilt
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.35,
      0.06,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -mouse.y * 0.25,
      0.06,
    );

    // Floating animation
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.08;
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[2.0, 2.0, 0.15]} />
      <meshPhysicalMaterial
        map={texture}
        roughness={0.25}
        metalness={0.25}
        clearcoat={0.8}
        clearcoatRoughness={0.15}
        reflectivity={0.6}
      />
    </mesh>
  );
}

/* =======================
   MAIN HERO SECTION
======================= */
const ProductHero = () => {
  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        {/* TEXT SIDE */}
        <div style={styles.content}>
          <p style={styles.kicker}>Bathroom Collection</p>

          <h1 style={styles.title}>
            One-Piece <br /> English Toilet Seat
          </h1>

          <p style={styles.desc}>
            Designed with premium ceramic glazing and a rich dark-green finish.
            Built for durability, elegance, and modern luxury bathrooms.
          </p>

          <ul style={styles.list}>
            <li>High-density ceramic body</li>
            <li>Scratch & stain resistant glaze</li>
            <li>Soft-close precision seat</li>
            <li>Modern one-piece design</li>
          </ul>

          <button style={styles.button}>View Specifications</button>
        </div>

        {/* 3D SIDE */}
        <div style={styles.canvas}>
          <Canvas shadows camera={{ position: [0, 0.2, 5], fov: 35 }}>
            <ambientLight intensity={0.6} />

            <spotLight
              position={[5, 8, 5]}
              angle={0.3}
              penumbra={1}
              intensity={1.4}
              castShadow
            />

            <directionalLight position={[-5, 5, 5]} intensity={0.8} />

            <ProductCard />

            {/* Shadow Floor */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2.4, 0]}
              receiveShadow
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.18} />
            </mesh>

            <Environment preset="studio" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;

/* =======================
   STYLES
======================= */
const styles = {
  section: {
    minHeight: "60vh",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "100px 20px",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  content: {
    fontFamily: "Inter, sans-serif",
    maxWidth: "520px",
  },
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "1.6px",
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "14px",
  },
  title: {
    fontSize: "48px",
    lineHeight: "1.15",
    fontWeight: "600",
    color: "#111827",
  },
  desc: {
    marginTop: "22px",
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#374151",
  },
  list: {
    marginTop: "26px",
    paddingLeft: "18px",
    lineHeight: "1.9",
    color: "#111827",
  },
  button: {
    marginTop: "34px",
    padding: "14px 36px",
    borderRadius: "32px",
    border: "1px solid #111827",
    background: "transparent",
    fontSize: "14px",
    cursor: "pointer",
  },
  canvas: {
    width: "100%",
    height: "520px",
    borderRadius: "24px",
    background: "linear-gradient(145deg,#f9fafb,#eef2f7)",
    boxShadow: "0 50px 100px rgba(0,0,0,0.12)",
  },
};

/* =======================
   MOBILE RESPONSIVE
======================= */
if (typeof window !== "undefined" && window.innerWidth < 768) {
  styles.wrapper.gridTemplateColumns = "1fr";
  styles.wrapper.gap = "40px";
  styles.canvas.height = "420px";
  styles.title.fontSize = "36px";
}
