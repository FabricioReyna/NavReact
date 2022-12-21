import React from "react";
import { useLocation } from "react-router-dom";
import './style.css'
import CardProduct from "../../components/card-prodcut/CardProduct";

const detail = () =>{
    const { state} = useLocation()
    return( 
        <div className="Detail-cotanier">
            <h1>Detail</h1>
            <div className="card-detail">
            <CardProduct product={state} key={state.name} onSelect= {() => {
                
            }}  />
            </div>
        </div>
    )
}
export default detail