import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GIFS } from "./data/gifs";
import CardGifs from "./CardGifs";

const Gifs = () =>{

    const navigate = useNavigate();

  const OnHandleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };
    return (
        <main>
        <h1 className="title-prin">Iconos Gifs</h1>
      <div className="contenido-main">
        
   
      { GIFS.map((product) => (
        <CardGifs
          product={product}
          key={product.name}
          onSelect={OnHandleSelect}
        />
        
      ))}
      </div>
      </main>
    );
}
export default Gifs