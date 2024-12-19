import "./navbar.css"
import CarWidget from "./CarWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {

    return(
    <nav className='navbar'>
      
      <div className='brand'>
        <a href="/">
         <img className="imgNav" src="/public/logosanlo.png" alt="Logo" />
        </a>
      </div>


      <ul className="categories">
        <NavLink to= "/category/pelotas" className={({isActive}) => isActive ? "category-active" : "category"}>Pelotas</NavLink>
        <NavLink to= "/category/botines" className={({isActive}) => isActive ? "category-active" : "category"}> Botines</NavLink>
        <NavLink to = "/category/camisetas" className={({isActive}) => isActive ? "category-active" : "category"}>Camisetas</NavLink>
      </ul>

        <CarWidget/>
    </nav>
    )
}

const saludo = "Hola mundo"

export default NavBar