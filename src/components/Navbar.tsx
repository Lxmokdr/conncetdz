
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-connect-primary font-bold text-2xl">Connect<span className="text-connect-accent">DZ</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-connect-primary px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-connect-primary px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-connect-primary px-3 py-2 text-sm font-medium">
              How It Works
            </Link>
            <Link to="/partners" className="text-gray-700 hover:text-connect-primary px-3 py-2 text-sm font-medium">
              Partners
            </Link>
            <Button className="bg-connect-primary hover:bg-blue-700 ml-4">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-connect-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-connect-primary px-3 py-2 text-base font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-connect-primary px-3 py-2 text-base font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/how-it-works" className="block text-gray-700 hover:text-connect-primary px-3 py-2 text-base font-medium" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link to="/partners" className="block text-gray-700 hover:text-connect-primary px-3 py-2 text-base font-medium" onClick={toggleMenu}>
              Partners
            </Link>
            <Button className="bg-connect-primary hover:bg-blue-700 w-full mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
