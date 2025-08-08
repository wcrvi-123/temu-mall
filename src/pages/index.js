import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>欢迎来到 Temu 商城</h1>
        <p>这是主页。</p>
      </main>
      <Footer />
    </div>
  );
}
