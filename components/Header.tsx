
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ShoppingBagIcon } from './Icons';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-brand-secondary/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight text-brand-primary">
              LUXE
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors">Home</Link>
            {/* You can map categories here dynamically */}
            <a href="/#/cart" className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors">Clothes</a>
            <a href="/#/cart" className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors">Shoes</a>
            <a href="/#/cart" className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors">Accessories</a>
          </nav>
          <div className="flex items-center">
            <div className="flow-root">
              <Link to="/cart" className="group -m-2 p-2 flex items-center relative">
                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
