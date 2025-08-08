import React from 'react';

const CategoryList = () => {
  const categories = ['手机', '家电', '服装', '日用', '美妆'];

  return (
    <div style={{ padding: '1rem', background: '#f5f5f5' }}>
      <h2>商品分类</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;