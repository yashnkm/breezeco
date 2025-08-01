import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link className="text-2xl font-bold text-gray-800" to="/">
            The Breeze Co
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/reviews">
              Reviews
            </Link>
            <Link className="nav-link" to="/learn">
              Learn
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a className="nav-link hidden md:block" href="#">
            For Business
          </a>
          <Link className="nav-link" to="/support">
            Support
          </Link>
          <a className="nav-link" href="#">
            <span className="material-icons">shopping_bag</span>
          </a>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link className="block nav-link" to="/shop">Shop</Link>
            <Link className="block nav-link" to="/reviews">Reviews</Link>
            <Link className="block nav-link" to="/learn">Learn</Link>
            <a className="block nav-link" href="#">For Business</a>
            <Link className="block nav-link" to="/support">Support</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;