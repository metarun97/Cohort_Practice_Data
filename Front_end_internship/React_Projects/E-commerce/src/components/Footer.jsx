import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full px-5 py-10 lg:px-10 lg:py-5">
      <div className="px-3 py-2 flex lg:justify-evenly flex-col lg:flex-row gap-5">
        <ul>
          <li className="text-lg font-semibold text-blue-950">Home</li>
          <li className="text-lg font-semibold text-blue-950">
            Shop / Products
          </li>
          <li className="text-lg font-semibold text-blue-950">About Us</li>
          <li className="text-lg font-semibold text-blue-950">Contact</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold text-blue-950">FAQs</li>
          <li className="text-lg font-semibold text-blue-950">
            Shipping & Returns
          </li>
          <li className="text-lg font-semibold text-blue-950">
            Privacy Policy
          </li>
          <li className="text-lg font-semibold text-blue-950">
            Terms & Conditions
          </li>
        </ul>
        <ul>
          <li className="text-lg font-semibold text-blue-950 flex items-center gap-2">
            <FaInstagram />
            Instagram
          </li>
          <li className="text-lg font-semibold text-blue-950 flex items-center gap-2">
            <FaGithub />
            GitHub
          </li>
          <li className="text-lg font-semibold text-blue-950 flex items-center gap-2">
            <FaXTwitter />
            Twitter(X)
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
