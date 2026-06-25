import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand + Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-white text-xl font-bold mb-3">ShopMart</h2>
            <p className="text-sm text-gray-400 mb-5 max-w-sm">
              Discover quality products curated for your lifestyle. Shop smart, shop with us.
            </p>

            <p className="text-sm text-gray-200 font-medium mb-2">Subscribe to our newsletter</p>
            <div className="flex items-center bg-gray-800 rounded-full pl-4 pr-1.5 py-1.5 max-w-sm">
              <MdEmail className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-3 text-sm w-full text-white placeholder-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full shrink-0 transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/new-arrivals" className="hover:text-white transition-colors">
                  New Arrivals
                </NavLink>
              </li>
              <li>
                <NavLink to="/best-sellers" className="hover:text-white transition-colors">
                  Best Sellers
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className="hover:text-white transition-colors">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/offers" className="hover:text-white transition-colors">
                  Offers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="hover:text-white transition-colors">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:text-white transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/shipping-info" className="hover:text-white transition-colors">
                  Shipping Info
                </NavLink>
              </li>
              <li>
                <NavLink to="/returns" className="hover:text-white transition-colors">
                  Returns
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} BrandName. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </NavLink>
            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </NavLink>
            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </NavLink>
            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
