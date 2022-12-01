import { useState } from 'react'
import './App.css'
import Under from './components/nav'
import Search from './components/Search'
import imgAmazo from "./media/flati.svg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div className="dat">
        <img src={imgAmazo} alt="a" className='HomeImg' />
        <Under />
    
      <Search />
      
      </div>
      </header>
    </div>
  )
}

export default App
