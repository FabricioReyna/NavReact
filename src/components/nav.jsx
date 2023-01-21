import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./card-prodcut/data/productos";
const Under = () => {
    const [data, setData] = useState(PRODUCTS)
    const filterResult = (cardItem) =>{
      const Result =  PRODUCTS.filter((cardItem) => {
        return cardItem.categoriaid === cardItem;
      })
      setData(Result)
      
    }
    console.log( PRODUCTS)
{/* <Link to={"/categoria"}> Iconos Solidos</Link> */}
    return(<>

   
    <nav className="nav">
      <ul>
        <li> <Link to={"./"}>Inicio</Link></li>
        <li > <Link  to={"./categoria"}>Solidos</Link> </li>
        <li><Link to={"./stickers"}>Stickers</Link></li>
        <li><Link to={"./gifs"}>Gifs</Link></li>
      </ul>
    </nav>
    


    </>)
}
export default Under;