import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { subscribeToAuthChanges } from '../../../services/authService';
import useCartStore from '../../../store/cartStore';

export default function NavBar() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setLoggedInUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h2 className="text-2xl font-bold tracking-tighter text-text-heading">
              WATCH<span className="text-primary">.</span>
            </h2>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-[12px] font-semibold uppercase tracking-widest">
              <li>
                <Link
                  to="/gallery"
                  className={`${
                    isActive('/gallery') ? 'text-primary' : 'text-text-heading hover:text-primary'
                  } transition-colors duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={`${
                    isActive('/cart') ? 'text-primary' : 'text-text-heading hover:text-primary'
                  } transition-colors duration-300 flex items-center gap-2`}
                >
                  Cart 
                  {totalItems > 0 && (
                    <span className="bg-primary text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
              {loggedInUser ? (
                <li>
                  <Link
                    to="/profile"
                    className={`${
                      isActive('/profile') ? 'text-primary' : 'text-text-heading hover:text-primary'
                    } transition-colors duration-300`}
                  >
                    Profile
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className={`${
                        isActive('/login') ? 'text-primary' : 'text-text-heading hover:text-primary'
                      } transition-colors duration-300`}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="primary-btn !py-2 !px-6 !text-[10px]"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-heading">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

