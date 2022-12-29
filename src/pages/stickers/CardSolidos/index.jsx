import React from "react";
const CardSolidos = ({product}) => {
    
    const { id, categoriaid, descripcion, titulo, imagen, precio, stock } = product;
    console.log(CardSolidos)
    return(
        <div className="card" onClick={ () => onSelect(product) }>
        <div className="fila">
          <div className="col">
            <img src={imagen} alt={titulo} />
            <div className="card-content">
              <h3 className="card-title"> {titulo} </h3>
              <p className="card-descrip">{descripcion}</p>
              <span className="card-price">$ {precio}</span>
              <span className="card-stocks">{stock} Stocks</span>
              <button className="card-button" >Comprar</button>
            </div>
            <div className="stocks">
              <span className="card-plus">+</span>
              <input type="text" className="card-input" placeholder="0"/>
              <span className="card-minus">-</span>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CardSolidos