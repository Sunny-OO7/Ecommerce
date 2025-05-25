import { X } from "lucide-react";
import CartContents from "../Cart/CartContents";

interface CartDrawerProps {
  cartOpen: boolean;
  toggleCart: () => void;
}

const CartDrawer = ({ cartOpen, toggleCart }: CartDrawerProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/*Close Button*/}
      <div className="flex justify-end p-4">
        <button onClick={toggleCart}>
          <X className="text-gray-700" />
        </button>
      </div>
      {/*Cart Contents with scrollable area*/}
      <div className="flex-grow p-4 overflow-y-autoauto">
        <h2 className="text-xl font-semibold mb-4">My Cart</h2>
        {/* Component for cart Contents */}
        <CartContents />
      </div>
      {/* Checkout Button */}
      <div className="sticky p-4 bg-white bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-700">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
