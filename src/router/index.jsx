import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart } from "../pages";

const Router = () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    )
}
export default Router