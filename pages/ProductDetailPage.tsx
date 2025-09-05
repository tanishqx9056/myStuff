
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string | undefined>(product?.images[0]);
  const [error, setError] = useState<string>('');
  const [addedMessage, setAddedMessage] = useState<string>('');

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  if (!selectedColor && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
  }
  if (!selectedSize && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size.');
      return;
    }
    if (!selectedColor) {
      setError('Please select a color.');
      return;
    }
    setError('');
    addToCart(product, selectedSize, selectedColor);
    setAddedMessage('Added to cart!');
    setTimeout(() => setAddedMessage(''), 2000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image gallery */}
        <div>
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-4">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => setMainImage(image)} className={`rounded-lg overflow-hidden border-2 ${mainImage === image ? 'border-indigo-500' : 'border-transparent'}`}>
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-center object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4 md:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>{product.description}</p>
            </div>
          </div>

          <form className="mt-6">
            {/* Colors */}
            <div>
              <h3 className="text-sm text-gray-900 font-medium">Color</h3>
              <div className="flex items-center space-x-3 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === color ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                  >
                    <span className="sr-only">{color}</span>
                    <span style={{backgroundColor: color.toLowerCase().replace(' ', '')}} className={`h-8 w-8 rounded-full border border-black border-opacity-10`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${selectedSize === size ? 'bg-indigo-600 text-white border-transparent' : 'bg-white text-gray-900 border-gray-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            {addedMessage && <p className="mt-4 text-sm text-green-600">{addedMessage}</p>}

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
