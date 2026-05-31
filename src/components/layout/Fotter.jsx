import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] pt-12 pb-6 text-white">
      <div className="mx-auto w-full max-w-none px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EthioShop</h3>
            <p className="mb-4 text-white/65">
              Premium electronics shopping with curated products for your setup.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/45 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/45 transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/45 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/new-arrivals"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/category/clothing"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/category/accessories"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Accessories
                </Link>
              </li>

              <li>
                <Link
                  to="/sale"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-white/45 mr-2 mt-0.5" />
                <span className="text-white/55">
                  123 Bole, Design District, Adama, ET 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-white/45 mr-2" />
                <span className="text-white/55">+251-91223-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-white/45 mr-2" />
                <span className="text-white/55">support@EthioShop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/45 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EthioShop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/45 hover:text-white text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-white/45 hover:text-white text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/45 hover:text-white text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
