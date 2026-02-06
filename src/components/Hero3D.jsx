import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ProductPlane() {
  const meshRef = useRef();
  const texture = useTexture("/images/washbasin.png");

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.3,
        0.05,
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mouse.y * 0.2,
        0.05,
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[3.5, 2.2]} />
      <meshStandardMaterial map={texture} metalness={0.4} roughness={0.25} />
    </mesh>
  );
}

const Hero3D = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Text Content */}
        <div style={styles.text}>
          <h1>
            Premium <span>Handcrafted</span>
            <br /> Kitchen & Bathroom Sink
          </h1>
          <p>
            Engineered with high-grade stainless steel, corrosion resistance,
            precision finishing, and luxury matte coating for long-lasting
            shine.
          </p>
          <ul>
            <li>✔ Rust & stain resistant</li>
            <li>✔ Heavy gauge steel body</li>
            <li>✔ Smooth drainage & soundproof design</li>
          </ul>
          <button>View Specifications</button>
        </div>

        {/* 3D Canvas */}
        <div style={styles.canvasWrap}>
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <ProductPlane />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;

const styles = {
  section: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
    display: "flex",
    alignItems: "center",
    padding: "100px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins, sans-serif",
  },
  canvasWrap: {
    height: "420px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "#ffffff",
    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
  },
};
