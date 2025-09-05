
import React from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gray-800 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://picsum.photos/seed/hero/1600/800"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">New Arrivals</h1>
          <p className="mt-6 text-xl text-indigo-100">
            Discover our latest collection of timeless essentials, crafted with quality and designed for modern life.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 sm:w-auto"
          >
            Shop Collection
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            // Ensure ProductCard is returned and has a unique key. This fixes React Error #31.
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
