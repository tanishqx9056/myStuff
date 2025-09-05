
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger payment processing with Stripe, etc.
    console.log('Placing order...');
    clearCart();
    setOrderPlaced(true);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return <Navigate to="/cart" replace />;
  }

  if (orderPlaced) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">Thank you!</h1>
        <p className="mt-4 text-lg text-gray-700">Your order has been placed successfully.</p>
        <p className="mt-2 text-gray-500">A confirmation email has been sent to you.</p>
        <Link to="/" className="mt-8 inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const shippingCost = 5.00;
  const orderTotal = totalPrice + shippingCost;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
          <form onSubmit={handlePlaceOrder} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1">
                      <input type="email" id="email" name="email" autoComplete="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
              </div>

              <h2 className="text-lg font-medium text-gray-900 sm:col-span-2 mt-6">Shipping Information</h2>
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                  <div className="mt-1">
                      <input type="text" id="name" name="name" autoComplete="name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <div className="mt-1">
                      <input type="text" id="address" name="address" autoComplete="street-address" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
              </div>
              <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <div className="mt-1">
                      <input type="text" id="city" name="city" autoComplete="address-level2" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
              </div>
              <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
                  <div className="mt-1">
                      <input type="text" id="postal-code" name="postal-code" autoComplete="postal-code" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
              </div>

              <h2 className="text-lg font-medium text-gray-900 sm:col-span-2 mt-6">Payment Details</h2>
              <div className="sm:col-span-2">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                  <div className="mt-1">
                      <input type="text" id="card-number" name="card-number" autoComplete="cc-number" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="XXXX XXXX XXXX XXXX"/>
                  </div>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                  <div className="mt-1">
                      <input type="text" name="expiration-date" id="expiration-date" autoComplete="cc-exp" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="MM/YY"/>
                  </div>
              </div>
              <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                  <div className="mt-1">
                      <input type="text" name="cvc" id="cvc" autoComplete="cc-csc" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="123" />
                  </div>
              </div>

              <div className="sm:col-span-2 mt-6">
                <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                  Place Order
                </button>
              </div>
          </form>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          <div className="mt-4 bg-gray-50 rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <li key={`${item.product.id}-${item.size}-${item.color}`} className="flex py-4 space-x-4">
                  <img src={item.product.images[0]} alt={item.product.name} className="h-20 w-20 rounded-md object-cover"/>
                  <div className="flex-auto space-y-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.color}, {item.size}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="flex-none text-sm font-medium text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-4 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</dd>
                </div>
                 <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">${shippingCost.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total</dt>
                    <dd className="text-base font-medium text-gray-900">${orderTotal.toFixed(2)}</dd>
                </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
