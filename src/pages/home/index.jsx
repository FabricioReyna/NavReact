import { useState } from 'react'
import './style.css'
import Under from '../../components/nav'
import Search from '../../components/Search'
import imgAmazo from "../../media/flati.svg"
import CardProduct from '../../components/card-prodcut/CardProduct'
import { PRODUCTS } from '../../components/card-prodcut/data/productos'



const Home = () => {

  const [isOpenWidget, setOpenWidget] = useState(false);

  return (
    
    <div className="App">
      <header>
        <div className="dat">
        <img src={imgAmazo} alt="a" className='HomeImg' />
        <Under/>
    
      <Search />
    
      </div>
        
      </header>

      <main>
        <h1 className='title-prin'>Productos destacados</h1>
        <div className="contenido-main">
        {PRODUCTS.map((product) =>(
          <CardProduct product={product} key={product.name} />
        ))}
        </div>
      </main>
    </div>
  )
}

export default Home;
