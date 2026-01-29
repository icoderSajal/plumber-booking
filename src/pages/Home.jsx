import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import Carousel from "../components/Carousel";
import CustomerReviews from "../components/CustomerReviews";
import { Helmet } from "react-helmet-async";
import OurPlumbers from "../components/OurPlumbers";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PVC Pipes in Bareilly | Abhiyaan Sanitary</title>
        <meta
          name="description"
          content="Best PVC & CPVC pipes at best price"
        />
      </Helmet>
      <Navbar />
      <CategoryBar />
      <Carousel />
      <Hero />
      <OurPlumbers />
      <Stats />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
