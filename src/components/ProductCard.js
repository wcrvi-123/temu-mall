export default function ProductCard({ name, price }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>{name}</h3>
      <p>价格: ¥{price}</p>
    </div>
  );
}
