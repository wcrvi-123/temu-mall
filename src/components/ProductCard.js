import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', backgroundColor: '#fff' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{product.name}</h3>
      <p>¥{product.price}</p>
      <button style={{ backgroundColor: '#f60', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}>
        加入购物车
      </button>
    </div>
  );
};

export default ProductCard;