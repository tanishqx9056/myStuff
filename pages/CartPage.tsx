
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { TrashIcon, PlusIcon, MinusIcon } from '../components/Icons';

const CartItemRow: React.FC<{ item: import('../types').CartItem }> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3><Link to={`/product/${item.product.id}`}>{item.product.name}</Link></h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                    <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center border border-gray-200 rounded">
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-2 text-gray-500 hover:text-gray-700">
                           <MinusIcon className="h-4 w-4" />
                        </button>
                        <p className="w-8 text-center text-gray-900">{item.quantity}</p>
                         <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-2 text-gray-500 hover:text-gray-700">
                           <PlusIcon className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex">
                        <button type="button" onClick={() => removeFromCart(item.product.id, item.size, item.color)} className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                            <TrashIcon className="h-5 w-5 mr-1"/> Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

const CartPage: React.FC = () => {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-4 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="mt-6 inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
          <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cartItems.map((item, index) => (
              // This is a valid React Component with a unique key.
              // A composite key is used since a product can be in the cart multiple times with different sizes/colors.
              <CartItemRow key={`${item.product.id}-${item.size}-${item.color}-${index}`} item={item} />
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>
          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
              </dt>
              <dd className="text-sm font-medium text-gray-900">$5.00</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">Order total</dt>
              <dd className="text-base font-medium text-gray-900">${(totalPrice + 5.00).toFixed(2)}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <Link to="/checkout" className="w-full text-center bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 block">
              Checkout
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
