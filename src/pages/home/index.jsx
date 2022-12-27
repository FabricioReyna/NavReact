import { useState } from "react";
import "./style.css";

import CardProduct from "../../components/card-prodcut/CardProduct";
import { PRODUCTS } from "../../components/card-prodcut/data/productos";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const OnHandleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  useEffect(() => {
    const HandleScroll = (event) => {
      console.log("Scrolling", window.scrollY);
    };
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  });
  return (
    <main>
      <h1 className="title-prin">Productos destacados</h1>
      <div className="contenido-main">
        {PRODUCTS.map((product) => (
          <CardProduct
            product={product}
            key={product.name}
            onSelect={OnHandleSelect}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
