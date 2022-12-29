import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import CardSolidos from "./CardSolidos";
import { SOLIDOS } from "./data/solidos";
import { useNavigate } from "react-router-dom";

const Stickers = () =>{

    const navigate = useNavigate();

  const OnHandleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };
  console.log(SOLIDOS)
    return (
        <main>
        <h1 className="title-prin">Iconos Stickers</h1>
      <div className="contenido-main">
        
   
      {SOLIDOS.map((product) => (
        <CardSolidos
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