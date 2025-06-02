import Casual from "../../assets/Casual.png";
import Gym from "../../assets/Gym.png";
import Party from "../../assets/Party.png";
import Formal from "../../assets/Formal.png";

const DressStyle = () => {
  return (
    <section className="pt-12 px-4 md:px-24 bg-white">
      <div className="bg-[#f0f0f0] rounded-3xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold uppercase py-12">
          Browse By Dress Style
        </h2>
        <div className="flex flex-col   lg:grid lg:grid-cols-12 gap-6 mx-[24px] pb-16 lg:px-20 lg:pb-25">
          <div className="  bg-white md:col-span-5 overflow-hidden mx-auto min-w-full  h-[250px] lg:h-[320px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Casual
            </h1>
            <img
              src={Casual}
              alt=""
              className="  transform  translate-x-4 scale-200 "
            />
          </div>
          <div className="bg-white md:col-span-7 overflow-hidden mx-auto min-w-full h-[250px] lg:h-[320px] rounded-3xl">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Formal
            </h1>
            <img
              src={Formal}
              alt=""
              className="transform translate-x-80  translate-y-19 scale-180"
            />
          </div>
          <div className="bg-white md:col-span-7 overflow-hidden mx-auto min-w-full h-[250px] lg:h-[320px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Party
            </h1>
            <img
              src={Party}
              alt=""
              className="transform translate-x-30  -translate-y-30"
            />
          </div>
          <div className="bg-white md:col-span-5 overflow-hidden mx-auto min-w-full h-[250px] lg:h-[320px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Gym
            </h1>
            <img
              src={Gym}
              alt=""
              className="transform translate-x-50  -translate-y-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
