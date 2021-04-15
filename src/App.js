import {useState, useEffect} from 'react';
import './App.css';
import Cart from './cart/Cart';
import Product from './Product/Product';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const limit = 20;
    const page = 1;
    let url = "https://jirabo.com"
    const newUrl = `${url}/api/product?limit=${limit}&page=${page}`;
    fetch(newUrl).then(res=> res.json()).then(data=> setProducts(data.data)).catch(err=>alert(err));
  }, [])
  return (
    <div className="App">
      <div>
      {products.length > 0 ? products.map((product) => (
        <Product key={product._id} id={product._id} title={product.name} price={product.price.regular} />
      )) : null }
      </div>
      <Cart/>
    </div>
  );
}

export default App;
