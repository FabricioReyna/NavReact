import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Categoria = () =>{

    return(
        <div className="cart">
            <h1>Categoria</h1>
            <Link to={"/"}> <button> Go to Home</button></Link>
    
        </div>
    )
}
export default Categoria