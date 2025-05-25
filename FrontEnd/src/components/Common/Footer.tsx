import { PhoneCall } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.{" "}
          </p>
          <p className="font-bold text-sm  text-gray-600 mb-6">
            Signup and get 10% off your first order.
          </p>
          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mbb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mbb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow US */}
        <div>
          <h3 className="text-lg text-gray-800 mbb-4">Follow Us</h3>
          <div>
            <a href="https://x.com/SunnyO_Okr" className="hover:text-gray-500">
              <RiTwitterXLine className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 mt-8">Call Us</p>
          <p>
            <PhoneCall className="w-4 h-4 inline-block mr-2" />
            +91 9999999999
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-700 text-sm text-center tracking-tight">
          © 2025, STYLEZONE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
