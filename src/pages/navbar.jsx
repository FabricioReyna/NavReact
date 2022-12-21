import Under from '../components/nav'
import Search from '../components/Search'
import imgAmazo from "../media/flati.svg"


const NavBar = () => {
    return(
        <header>
        <div className="dat">
        <img src={imgAmazo} alt="a" className='HomeImg' />
        <Under/>
    
      <Search />
    
      </div>
        
      </header> 

    )
}

export default NavBar