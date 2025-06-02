import Hero from "../components/Layout/Hero";
import BestSeller from "../components/Products/BestSeller";
import DressStyle from "../components/Products/DressStyle";
import GenederCollectionSection from "../components/Products/GenederCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
const Home = () => {
  return (
    <div>
      <Hero />
      <GenederCollectionSection />
      <NewArrivals />
      <BestSeller />
      <DressStyle />
    </div>
  );
};

export default Home;
