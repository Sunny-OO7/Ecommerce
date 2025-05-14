import { useState } from "react";
import { Search, X } from "lucide-react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSearchTogggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative  flex items-center justify-center w-full shadow-md"
        >
          <div className="relative mb-4 w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full  px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            {/*Search Icon*/}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black "
            >
              <Search size={22} />
            </button>
          </div>
          {/*Close Icon*/}
          <button
            type="button"
            onClick={handleSearchTogggle}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
          >
            <X size={20} />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchTogggle}
          className="text-gray-600 hover:text-black "
        >
          <Search size={22} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
