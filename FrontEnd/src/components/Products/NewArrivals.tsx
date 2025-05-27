import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
import FormatCurrency from "../../utilities/FormatCurrency";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section>
      <div className="mx-auto relative mb-15 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase">
          New Arrivals
        </h2>

        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-50px] flex space-x-2 lg:mr-46">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-2xl border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft className="text-l" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-2xl border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaChevronRight className="text-l" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product.id}`} className="block">
                <h4 className="font-medium">{product.title}</h4>
                <p>{FormatCurrency(product.price)}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
