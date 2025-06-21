import FormatCurrency from "../../utilities/FormatCurrency";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      title: "T-shirt with Tape Details",
      price: 1200,
      image: "https://picsum.photos/200?random=6",
    },
    {
      id: 2,
      title: "Skinny Fit Jeans",
      price: 2400,
      image: "https://picsum.photos/200?random=7",
    },
    {
      id: 3,
      title: "Checkered Shirt",
      price: 1800,
      image: "https://picsum.photos/200?random=8",
    },
    {
      id: 4,
      title: "Sleeve Striped T-shirt",
      price: 1300,
      image: "https://picsum.photos/200?random=9",
    },
    {
      id: 5,
      title: "Sleeve Striped T-shirt",
      price: 1399,
      image: "https://picsum.photos/200?random=10",
    },
    {
      id: 6,
      title: "Sleeve Striped T-shirt",
      price: 1599,
      image: "https://picsum.photos/200?random=11",
    },
    {
      id: 7,
      title: "Sleeve Striped T-shirt",
      price: 1299,
      image: "https://picsum.photos/200?random=12",
    },
    {
      id: 8,
      title: "Sleeve Striped T-shirt",
      price: 1789,
      image: "https://picsum.photos/200?random=13",
    },
    {
      id: 9,
      title: "Sleeve Striped T-shirt",
      price: 1989,
      image: "https://picsum.photos/200?random=14",
    },
    {
      id: 10,
      title: "Sleeve Striped T-shirt",
      price: 1999,
      image: "https://picsum.photos/200?random=15",
    },
  ];

  return (
    <section className="pt-12 px-4 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black uppercase">
        New Arrivals
      </h2>

      <div className="flex lg:grid grid-cols-4  gap-6 overflow-x-auto">
        {products.slice(0, 4).map((product) => (
          <div className="relaive min-w-1/2">
            <div
              key={product.id}
              className="bg-[#f9f9f9]  rounded-xl shadow hover:shadow-md transition"
            >
              <div className=" relative p-4 w-full h-auto   flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 ">
              <h3 className="font-medium text-base">{product.title}</h3>

              <div className="mt-2 text-lg font-semibold flex items-center gap-2">
                {FormatCurrency(product.price)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition">
          View All
        </button>
        <div className="w-full border-b border-gray-200 mt-10"></div>
      </div>
    </section>
  );
};

export default NewArrivals;
