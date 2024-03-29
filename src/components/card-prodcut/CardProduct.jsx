
import "./style.css";

const cardProduct = ({ product, onSelect }) => {
  const { id, categoriaid, descripcion, titulo, imagen, precio, stock } = product;
  console.log(cardProduct)

  return (
    <div className="card" onClick={ () => onSelect(product) }>
      <div className="fila">
        <div className="col">
          <div className="card-content">
          <img src={imagen} alt={titulo} className ="card-image" />
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
  );
};

export default cardProduct;
