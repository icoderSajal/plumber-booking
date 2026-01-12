import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <CategoryBar /> */}
      <Carousel />
      <Hero />

      <Stats />
      <Footer />
    </>
  );
};

export default Home;
