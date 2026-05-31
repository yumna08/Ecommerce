import React from "react";
import { Search, ShoppingBag, Heart, Menu, X, User, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="hidden h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white md:inline-flex"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/10 bg-white/5 px-4 font-poppins text-white shadow-lg backdrop-blur md:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-none items-center justify-between gap-4">
      <Link to="/">
        <div className="flex items-center">
          <div className="text-lg font-bold tracking-[0.2em] text-white">EthioShop</div>
        </div>
      </Link>
      <nav className="hidden items-center space-x-5 md:flex">
        <Link
          to="/"
          className="text-sm text-white/65 transition-colors hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-sm text-white/65 transition-colors hover:text-white"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-sm text-white/65 transition-colors hover:text-white"
        >
          About
        </Link>
        <Link
          to="/login"
          className="text-sm text-white/65 transition-colors hover:text-white"
        >
          Signup
        </Link>
      </nav>

      {/* the search and icons */}

      <div className="flex items-center space-x-3">
        {/* Theme toggle */}
        <ThemeToggle />
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-52 rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/35 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 lg:w-64"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
        </div>
        <Link
          to="/wishlist"
          className="relative text-white/70 transition-colors hover:text-white"
        >
          <Heart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">
            0
          </span>
        </Link>
        <Link to="/cart" className="relative text-white/70 transition-colors hover:text-white">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">
            0
          </span>
        </Link>
        <Link
          to="/account"
          className="hidden text-white/70 transition-colors hover:text-white md:block"
        >
          <User className="h-5 w-5" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-white/70 transition-colors hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-white/5 md:hidden">
          <div className="mx-auto w-full max-w-none px-4 md:px-6">
            <div className="py-3">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 pt-3.5 text-white placeholder:text-white/35 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
                <Search className="absolute left-6 top-[72px] h-5 w-5 text-white/40" />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/account"
                  className="flex items-center py-2 text-white/70 transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  My Account
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
