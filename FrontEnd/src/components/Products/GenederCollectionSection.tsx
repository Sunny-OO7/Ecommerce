import { Link } from "react-router";
import Men from "../../assets/men.webp";
import Women from "../../assets/Women.webp";
import Kid from "../../assets/Kids.webp";
const GenederCollectionSection = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center uppercase">
        Browse by Category
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women COllection */}
        <div className="relative flex-1">
          <img
            src={Women}
            alt="Women collection"
            className="w-full h-[500px] rounded-lg "
          />
          <div className="absolute bottom-8 left-8 bg-black text-white bg-opacity-90 p-4 rounded-4xl ">
            <Link to="#">
              <h2 className="text-2xl font-bold uppercase ">
                Women's Collection
              </h2>
            </Link>
          </div>
        </div>
        {/* Men COllection */}
        <div className="relative flex-1">
          <img
            src={Men}
            alt="Women collection"
            className="w-full h-[500px] rounded-lg "
          />
          <div className="absolute bottom-8 left-8 bg-black text-white bg-opacity-90 p-4 rounded-4xl ">
            <Link to="#">
              <h2 className="text-2xl font-bold uppercase ">
                Men's Collection
              </h2>
            </Link>
          </div>
        </div>
        {/* Kid COllection */}
        <div className="relative flex-1">
          <img
            src={Kid}
            alt="Women collection"
            className="w-full h-[500px] rounded-lg "
          />
          <div className="absolute bottom-8 left-8 bg-black text-white bg-opacity-90 p-4 rounded-4xl ">
            <Link to="#">
              <h2 className="text-2xl font-bold uppercase ">
                Kid's Collection
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenederCollectionSection;
