import "./style.css";
const cardProduct = ({ product }) => {
  const { id, descripcion, titulo, imagen, precio, stock } = product;

  return (
    <div className="card">
      <div className="fila">
        <div className="col">
          <img src={imagen} alt={titulo} />
          <div className="card-content">
            <h3 className="card-title"> {titulo} </h3>
            <p className="card-descrip">{descripcion}</p>
            <span className="card-price">$ {precio}</span>
            <span className="card-stocks">{stock} Stocks</span>
            <button className="card-button">Comprar</button>
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
