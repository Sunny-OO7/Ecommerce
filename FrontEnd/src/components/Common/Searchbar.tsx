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
    <div className="flex items-center gap-2 transition-all duration-300">
      {isOpen ? (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="relative w-48">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black w-48 transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <Search size={20} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleSearchTogggle}
            className="text-gray-600 hover:text-black"
          >
            <X size={20} />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchTogggle}
          className="text-gray-600 hover:text-black"
        >
          <Search size={22} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
