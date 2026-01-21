import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import Carousel from "../components/Carousel";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Carousel />
      <Hero />

      <Stats />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
