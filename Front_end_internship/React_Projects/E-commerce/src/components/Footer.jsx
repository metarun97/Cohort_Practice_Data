import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
import mainLogo from '/logos/shopping-cart.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex">
            <img className="h-8" src={mainLogo} alt="" />
            <span className="text-red-600">S</span>hop
            <span className="text-blue-500">
              <span className="text-yellow-500">Z</span>one
            </span>
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted online store for quality products, best prices and fast
            delivery.
          </p>

          <div className="flex gap-4 mt-4">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaMapMarkerAlt /> New Delhi, India
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope /> support@shopZone.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShopCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
