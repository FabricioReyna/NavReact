import { Link } from "react-router-dom"


const CartWidget = () => {
    return(
        <section className="absolute top-[10%] left-0 z-10 w-full items-center md:left-full md:max-w-md md:-translate-x-full">
        <section className="mx-4 rounded-md bg-white shadow-md md:max-w-md">
          <h4 className="p-5 font-bold text-black">Cart</h4>
          <hr />
          <div className="grid grid-cols-[1fr_4fr_1fr]	 gap-6 px-6 py-4">
            <img
              src="src\media\PackIconos.png"
              alt="PackIconos"
              className="rounded-md"
            />
            <div className="">
              <h6>Pack de Iconos</h6>
              <p>
                <span>$125.00 x 3</span> <b>$ 375,00</b>
              </p>
            </div>
          </div>
          <div className="px-6 pb-8">
          <Link to={'/cart'}>   
            <button className="w-full rounded-md bg-blue-500 py-4 text-white transition-all hover:bg-blue-700">
           Ir Al Carrito 
            </button>
            </Link>
          </div>
        </section>
      </section>
    )
}

export default CartWidget