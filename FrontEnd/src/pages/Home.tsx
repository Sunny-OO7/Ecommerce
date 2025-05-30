import Hero from "../components/Layout/Hero";
import BestSeller from "../components/Products/BestSeller";
import GenederCollectionSection from "../components/Products/GenederCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
const Home = () => {
  return (
    <div>
      <Hero />
      <GenederCollectionSection />
      <NewArrivals />
      <BestSeller />
    </div>
  );
};

export default Home;
