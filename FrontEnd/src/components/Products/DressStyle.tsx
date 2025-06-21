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
        <div className="flex flex-col   lg:grid lg:grid-cols-12 gap-5 mx-[24px] pb-16 lg:px-16 lg:pb-19">
          <div className=" relative bg-white md:col-span-5 overflow-hidden mx-auto min-w-full  h-[190px] lg:h-[289px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Casual
            </h1>

            <img
              src={Casual}
              alt=""
              className="absolute  h-full w-full object-contain scale-180 "
            />
          </div>
          <div className="relative bg-white md:col-span-7 overflow-hidden mx-auto min-w-full h-[190px] lg:h-[289px] rounded-3xl">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Formal
            </h1>
            <div className="absolute  ml-60 h-[289px] w-3/4">
              <img
                src={Formal}
                alt=""
                className=" h-full w-full object-contain scale-180 "
              />
            </div>
          </div>
          <div className="relative bg-white md:col-span-7 overflow-hidden mx-auto min-w-full h-[190px] lg:h-[289px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Party
            </h1>

            <img
              src={Party}
              alt=""
              className="absolute  h-full w-full object-contain scale-180 "
            />
          </div>
          <div className="relative bg-white md:col-span-5 overflow-hidden mx-auto min-w-full h-[190px] lg:h-[289px] rounded-3xl ">
            <h1 className="absolute z-10 text-3xl font-bold mt-10 mx-10">
              Gym
            </h1>

            <img
              src={Gym}
              alt=""
              className="absolute  h-full w-full object-contain scale-180 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
