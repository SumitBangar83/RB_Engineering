// src/data/products.js
export const featuredProducts = [
  {
    id: 1,
    name: 'Chocolate Tempering Machine',
    category: 'Chocolate Machines',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1587132137056-8d69e5d1b56d?w=400',
    description: 'Professional chocolate tempering machine with digital controls',
    stock: 5,
    isNew: true
  },
  {
    id: 2,
    name: 'Industrial Vedros Maker',
    category: 'Vedros Making Machines',
    price: 32500,
    image: 'https://images.unsplash.com/photo-1589923188659-0d21c870ef43?w=400',
    description: 'High-capacity vedros production machine with automation',
    stock: 3,
    isNew: false
  },
  {
    id: 3,
    name: 'Heavy Duty Mixer',
    category: 'Heavy Machinery',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1589923188703-8c8a8c8c8c8c?w=400',
    description: 'Industrial mixer for large-scale production',
    stock: 8,
    isNew: true
  }
];

export const productsData = [
  ...featuredProducts,
  // Add more products here
];