import { X } from "lucide-react";
import { Link } from "react-router";

interface MenuDrawerProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuDrawer = ({ menuOpen, toggleMenu }: MenuDrawerProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/*Close Button*/}
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu}>
          <X className="text-gray-700" size={24} />
        </button>
      </div>
      <div className="ml-2">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black uppercase"
          >
            Kid
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuDrawer;
