import { Link } from "react-router";
import Men from "../../assets/men.webp";
import Women from "../../assets/Women.webp";
import Kid from "../../assets/Kids.webp";
const GenederCollectionSection = () => {
  return (
    <section className="pt-12 px-4 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black uppercase">
        Browse by Category
      </h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide lg:grid grid-cols-3 lg:space-x-0 lg:gap-8 ">
        {/* Women COllection */}
        <div className="relative min-w-full sm:min-w-[320px] lg:min-w-0 flex-shrink-0 snap-center lg:w-full">
          <img
            src={Women}
            alt="Women collection"
            className="w-full h-[500px] object-fill rounded-3xl shadow-lg transition-transform duration-300  "
          />
          <div className="absolute bottom-6 left-6 bg-black bg-opacity-90 text-white p-3 rounded-xl ">
            <Link to="#">
              <h2 className="text-xl font-bold uppercase ">
                Women's Collection
              </h2>
            </Link>
          </div>
        </div>
        {/* Men COllection */}
        <div className="relative w-full sm:min-w-[320px] md:min-w-0 flex-shrink-0 snap-center md:w-full">
          <img
            src={Men}
            alt="Women collection"
            className="w-full h-[500px] object-fill rounded-3xl shadow-lg transition-transform duration-300  "
          />
          <div className="absolute bottom-6 left-6 bg-black bg-opacity-90 text-white p-3 rounded-xl ">
            <Link to="#">
              <h2 className="text-xl font-bold uppercase">Men's Collection</h2>
            </Link>
          </div>
        </div>
        {/* Kid COllection */}
        <div className="relative min-w-full sm:min-w-[320px] md:min-w-0 flex-shrink-0 snap-center md:w-full">
          <img
            src={Kid}
            alt="Women collection"
            className="w-full h-[500px] object-fill rounded-3xl shadow-lg transition-transform duration-300  "
          />
          <div className="absolute bottom-6 left-6 bg-black bg-opacity-90 text-white p-3 rounded-xl ">
            <Link to="#">
              <h2 className="text-xl font-bold uppercase ">Kid's Collection</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenederCollectionSection;
