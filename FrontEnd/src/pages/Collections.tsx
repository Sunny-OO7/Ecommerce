import { Filter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import FormatCurrency from "../utilities/FormatCurrency";

type fetchedProducts = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Collections = () => {
  const [products, setProducts] = useState<fetchedProducts[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts: fetchedProducts[] = [
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
      setProducts(fetchedProducts);
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <Filter className="mr-2" />
        Filters
      </button>
      {/* Filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 `}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 md:gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="w-full overflow-hidden ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-700 font-medium">
                  {FormatCurrency(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
