import React from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';

const products = [
  {
    name: '无线耳机',
    price: '¥199',
    image: 'https://via.placeholder.com/300x200?text=无线耳机',
  },
  {
    name: '智能手表',
    price: '¥299',
    image: 'https://via.placeholder.com/300x200?text=智能手表',
  },
  {
    name: '蓝牙音箱',
    price: '¥159',
    image: 'https://via.placeholder.com/300x200?text=蓝牙音箱',
  },
];

const ProductPage = () => {
  return (
    <Layout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        padding: '2rem'
      }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductPage;
