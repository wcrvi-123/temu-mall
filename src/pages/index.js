import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';

const products = [
  { name: '商品 1', price: '¥99.99', image: 'https://via.placeholder.com/300' },
  { name: '商品 2', price: '¥199.99', image: 'https://via.placeholder.com/300' },
];

export default function Home() {
  return (
    <Layout>
      <h1>欢迎来到 Cow 商城</h1>
      <p>这是主页。</p>
      <CategoryList />
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </Layout>
  );
}
