import React from "react";
import { Link } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "./Searchbar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold font-display uppercase  text-gray-800 tracking-wide">
        <Link to="/">StyleZone</Link>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-600 hover:text-black uppercase">
          Men
        </Link>
        <Link to="/shop" className="text-gray-600 hover:text-black uppercase">
          Women
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-black uppercase">
          Kid
        </Link>
      </div>

      {/* Icons */}
      <div className="flex space-x-4 items-center">
        {/* Search Icon */}
        <SearchBar />
        <Link to="/login" className="text-gray-600 hover:text-black">
          <User size={22} />
        </Link>
        <Link to="/cart" className="text-gray-600 hover:text-black relative">
          <ShoppingCart size={22} />
          {/* Example Cart Count */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
