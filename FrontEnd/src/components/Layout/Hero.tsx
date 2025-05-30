import { Link } from "react-router";
import Model from "../../assets/Model.png";
const Hero = () => {
  return (
    <section className="bg-[#f0f0f0]  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 pt-4  relative">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-black leading-tight mb-4 h-auto w-[315px]  lg:w-[577px] mx-auto  uppercase">
            Find Clothes That Matches Your Style
          </h1>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src={Model}
            alt="Hero Model"
            className="w-72 md:w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
