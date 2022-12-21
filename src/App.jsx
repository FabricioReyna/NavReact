import React from "react";
import { Home } from "./pages";
import NavBar from "./pages/navbar";
import Router from "./router/index";
const App = () => {
  return(
    <div className="app">
      <NavBar />
      <Router/>
  </div>
  )
}

export default App
