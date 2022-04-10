import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Shop from "./routes/Shop";
import HomePage from "./routes/HomePage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const { id, image, title, price } = product;
    if (cart.find((product) => product.id === id)) {
      const newCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        } else {
          return product;
        }
      });
      setCart([...newCart]);
      return;
    }
    const newProduct = {
      id,
      image,
      title,
      price,
      qty: 1,
    };

    setCart([...cart, newProduct]);
  };

  const removeFromCart = (id) => {
    const productToRemove = cart.find((product) => product.id === id);
    if (productToRemove.qty === 1) {
      const Cart = cart.filter((product) => product.id !== productToRemove.id);
      setCart([...Cart]);
      return;
    }
    const NewCart = cart
      .map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty - 1 };
        } else {
          return product;
        }
      });
    
    setCart([...NewCart]);
  };

  const cartQuantity = cart.reduce((total, curItem) => total + curItem.qty, 0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop addToCart={addToCart} />} />
      </Routes>
      <div>Total Items in Cart : {cartQuantity}</div>
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
