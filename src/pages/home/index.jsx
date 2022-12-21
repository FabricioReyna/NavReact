import { useState } from 'react'
import './style.css'

import CardProduct from '../../components/card-prodcut/CardProduct'
import { PRODUCTS } from '../../components/card-prodcut/data/productos'



const Home = () => {

  const [isOpenWidget, setOpenWidget] = useState(false);

  return (
 
      
      <main>
        <h1 className='title-prin'>Productos destacados</h1>
        <div className="contenido-main">
        {PRODUCTS.map((product) =>(
          <CardProduct product={product} key={product.name} />
        ))}
        </div>
      </main>

  )
}

export default Home;
