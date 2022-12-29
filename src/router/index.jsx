import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart, Solidos, Stickers, Gifs } from "../pages";

const Router = () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/categoria"  element = {<Solidos /> }/>
        <Route path="/stickers"  element = {<Stickers /> }/>
        <Route path="/gifs"  element = {<Gifs /> }/>
      </Routes>
    )
}
export default Router