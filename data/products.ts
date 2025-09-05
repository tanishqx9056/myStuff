
import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 1, name: 'Clothes', image: 'https://picsum.photos/seed/cat1/800/600' },
  { id: 2, name: 'Shoes', image: 'https://picsum.photos/seed/cat2/800/600' },
  { id: 3, name: 'Accessories', image: 'https://picsum.photos/seed/cat3/800/600' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Organic Cotton Tee',
    price: 45.00,
    description: 'A classic crewneck t-shirt made from 100% premium organic cotton. Soft, breathable, and perfect for everyday wear.',
    category: 'Clothes',
    images: [
      'https://picsum.photos/seed/prod1_1/1000/1200',
      'https://picsum.photos/seed/prod1_2/1000/1200',
      'https://picsum.photos/seed/prod1_3/1000/1200',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Heather Grey'],
  },
  {
    id: 2,
    name: 'Minimalist Leather Sneakers',
    price: 120.00,
    description: 'Handcrafted from full-grain Italian leather, these sneakers feature a clean, timeless design. A versatile addition to any wardrobe.',
    category: 'Shoes',
    images: [
      'https://picsum.photos/seed/prod2_1/1000/1200',
      'https://picsum.photos/seed/prod2_2/1000/1200',
    ],
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['White', 'Cognac', 'Black'],
  },
  {
    id: 3,
    name: 'Canvas Utility Backpack',
    price: 85.00,
    description: 'Durable and spacious, this backpack is made from water-resistant canvas with leather details. Features a padded laptop sleeve.',
    category: 'Accessories',
    images: [
      'https://picsum.photos/seed/prod3_1/1000/1200',
      'https://picsum.photos/seed/prod3_2/1000/1200',
      'https://picsum.photos/seed/prod3_3/1000/1200',
    ],
    sizes: ['One Size'],
    colors: ['Olive Green', 'Charcoal'],
  },
  {
    id: 4,
    name: 'Slim-Fit Selvedge Denim',
    price: 150.00,
    description: 'Crafted from Japanese selvedge denim, these jeans offer a modern slim fit that breaks in beautifully over time.',
    category: 'Clothes',
    images: [
      'https://picsum.photos/seed/prod4_1/1000/1200',
      'https://picsum.photos/seed/prod4_2/1000/1200',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Indigo', 'Black'],
  },
   {
    id: 5,
    name: 'Wool Cashmere Scarf',
    price: 75.00,
    description: 'A luxurious blend of merino wool and cashmere makes this scarf incredibly soft and warm. Finished with classic fringe detail.',
    category: 'Accessories',
    images: [
      'https://picsum.photos/seed/prod5_1/1000/1200',
      'https://picsum.photos/seed/prod5_2/1000/1200',
    ],
    sizes: ['One Size'],
    colors: ['Camel', 'Charcoal', 'Navy'],
  },
  {
    id: 6,
    name: 'Leather Derby Shoes',
    price: 180.00,
    description: 'Classic Derby shoes with a modern twist. Goodyear welted for durability and made from supple calfskin leather.',
    category: 'Shoes',
    images: [
      'https://picsum.photos/seed/prod6_1/1000/1200',
      'https://picsum.photos/seed/prod6_2/1000/1200',
    ],
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Black', 'Dark Brown'],
  },
];
