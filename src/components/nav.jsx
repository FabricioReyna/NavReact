import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./card-prodcut/data/productos";
const Under = () => {
    const [data, setData] = useState(PRODUCTS)
    const filterResult = (CardProduct) =>{
      const Result =  PRODUCTS.filter((data) => {
        return data.categoriaid === CardProduct;
      })
      setData(Result)
      
    }
{/* <Link to={"/categoria"}> Iconos Solidos</Link> */}
    return(<>

   
    <nav className="nav">
      <ul>
        <li > <button  onClick={() => {
          filterResult("Solidos")
        }}>Solidos</button> </li>
        <li><a href="#">Stickers</a></li>
        <li><a href="#">Iconos Gifs</a></li>
        <li><select name="mas" id="mas">
          <option value="">Mas</option></select></li>
      </ul>
    </nav>
    


    </>)
}
export default Under;