
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Clothes</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Shoes</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Stay Connected</h3>
            <p className="mt-4 text-sm text-gray-400">Sign up for our newsletter to get the latest updates.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" placeholder="Enter your email" />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full bg-gray-700 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
