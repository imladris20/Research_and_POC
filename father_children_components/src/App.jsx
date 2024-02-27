import "./App.css";
import ProductList from "./components/ProductList";

const popularProducts = [
  { title: "熱門商品1", price: 1000, imageUrl: "popular one" },
  { title: "熱門商品2", price: 2000, imageUrl: "popular two" },
  { title: "熱門商品3", price: 3000, imageUrl: "popular three" },
];

const onSaleProducts = [
  {
    title: "特價商品1",
    price: 1000,
    discountRate: 0.7,
    imageUrl: "onsale one",
  },
  {
    title: "特價商品2",
    price: 2000,
    discountRate: 0.5,
    imageUrl: "onsale two",
  },
  {
    title: "特價商品3",
    price: 3000,
    discountRate: 0.4,
    imageUrl: "onsale three",
  },
];

function App() {
  return (
    <div>
      <h1>熱門商品</h1>
      <ProductList products={popularProducts} />
      <h1>特價商品</h1>
      <ProductList products={onSaleProducts} />
    </div>
  );
}

export default App;
