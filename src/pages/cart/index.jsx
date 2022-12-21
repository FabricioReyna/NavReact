import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Cart = () =>{
    return(
        <div className="cart">
            <h1>Cart</h1>
            <Link to={"/"}> <button> Go to Home</button></Link>
        </div>
    )
}
export default Cart