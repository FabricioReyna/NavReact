import { data } from "autoprefixer";
import { useState } from "react";
import { useEffect } from "react";
import CartIcon from "./cart-icon/CartIcon";
import CartWidget from "./cart-icon/cartwidget";
import { URL_BASE, URL_ENDPOINTS } from "./fetch/fetch";
import { useFetch } from "./fetch/useFetch";




const Search = () => {
  const [isOpenWidget, setOpenWidget] = useState(false);
  const {data: user , error, loading } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`)
  return ( 
    <div className="search-top">
      <div className="avatar">
        <img className="avatar-a" src={user?.avatar} alt={user?.name} />
      </div>
        
    <button className='a' onClick={() => setOpenWidget(!isOpenWidget)}>
    <CartIcon className="fill-white"/>
    </button>

    {
      isOpenWidget && <CartWidget />
    }
    </div>

  );
};
export default Search;
