import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart, Categoria } from "../pages";

const Router = () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/categoria"  element = {<Categoria /> }/>
      </Routes>
    )
}
export default Router