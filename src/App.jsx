import { useState } from 'react'
import './App.css'
import CartIcon from './components/cart-icon/CartIcon'
import CartWidget from './components/cart-icon/cartwidget'
import Under from './components/nav'
import Search from './components/Search'
import imgAmazo from "./media/flati.svg"
function App() {

  const [isOpenWidget, setOpenWidget] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="dat">
        <img src={imgAmazo} alt="a" className='HomeImg' />
        <Under />
    
      <Search />
    <button className='px-5 py-4  rounded-md hover:bg-[#C2D9E0]' onClick={() => setOpenWidget(!isOpenWidget)}>
        <CartIcon className="fill-white"/>
        </button>
        {
          isOpenWidget && <CartWidget />
        }
      </div>
   
      </header>
    </div>
  )
}

export default App
