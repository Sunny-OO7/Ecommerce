import { useState } from "react";
import { Link } from "react-router";
import { Menu, ShoppingCart, User } from "lucide-react";
import SearchBar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import MenuDrawer from "../Layout/MenuDrawer";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="  bg-white px-6 py-4 flex justify-between items-center shadow-md">
        {/* Mobile Hamburger  */}
        <div className="flex items-center gap-4">
          <button onClick={toggleMenu} className="md:hidden">
            <Menu />
          </button>
          {/* Logo */}
          <div className="text-2xl font-extrabold font-display uppercase  text-gray-800 tracking-wide">
            <Link to="/">StyleZone</Link>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/collections/all"
            className="text-gray-600 hover:text-black uppercase"
          >
            Men
          </Link>
          <Link to="/shop" className="text-gray-600 hover:text-black uppercase">
            Women
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-black uppercase"
          >
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
          <button
            onClick={toggleCart}
            className="text-gray-600 hover:text-black relative"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>
        </div>
      </nav>
      <CartDrawer cartOpen={cartOpen} toggleCart={toggleCart} />
      <MenuDrawer menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
