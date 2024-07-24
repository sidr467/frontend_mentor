'use client'

import { useState, useEffect } from "react";
import Product from "./Product";
import YourCart from "./YourCart";
import ConfirmationModal from "./ConfirmationModal";

const Page = () => {
  const [cart, setCart] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch product data
  useEffect(() => {
    fetch("/product-list-cart/json/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-10 gap-12 p-4">
      <div className="lg:col-span-7 flex flex-col gap-8">
        <h1 className="text-black font-bold text-3xl md:text-4xl">Desserts</h1>
        <Product cart={cart} setCart={setCart} products={products} />
      </div>
      <div className="lg:col-span-3">
        <YourCart
          cart={cart}
          setCart={setCart}
          products={products}
          onConfirm={handleConfirmOrder}
        />
      </div>
      {showModal && <ConfirmationModal cart={cart} products={products} onClose={handleCloseModal} />}
    </div>
  );
};

export default Page;
