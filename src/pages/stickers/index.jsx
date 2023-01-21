import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import CardStickers from "./CardStikers";
import { STICKERS } from "./data/stickers";
import { useNavigate } from "react-router-dom";

const Stickers = () =>{

    const navigate = useNavigate();

  const OnHandleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };
    return (
        <main>
        <h1 className="title-prin">Iconos Stickers</h1>
      <div className="contenido-main">
        
   
      {STICKERS.map((product) => (
        <CardStickers
          product={product}
          key={product.name}
          onSelect={OnHandleSelect}
        />
        
      ))}
      </div>
      </main>
    );
}
export default Stickers