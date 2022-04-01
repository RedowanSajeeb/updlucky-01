import React, { useEffect, useState } from "react";
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import BonusSubject from '../Q_A/BonusSubject'
import './Products.css'


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const productAddToCart = (product) => {
    const matchetProduct = cart.find((item) => item.id === product.id);
    if (matchetProduct) {
      alert("This Product has been already added");
    } else if (cart.length >= 4) {
      alert("You can not add more then 4 Products");
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  const randomOne = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];
    const newCarts = [random];
    setCart(newCarts);
  };
  const resetButton = () => {
    const reset = [];
    setCart(reset);
  };
  return (
    <div className="Products-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} productAddToCart={productAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <button onClick={randomOne}>
          <p>Choose best 1</p>
        </button>
        <button onClick={resetButton}>
          <p>Select Again</p>
        </button>
      </div>
      <BonusSubject></BonusSubject>
    </div>
  );
};

export default Products;