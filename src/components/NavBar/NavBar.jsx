import "./navbar.css"
import CarWidget from "./CarWidget"

const NavBar = () => {

    return(
        <nav className='navbar'>
      <div className='brand'>
        <img className="imgNav" src="./././public/logosanlo.png" alt="" />
        <p></p>
      </div>

      <ul className="categories">
        <li>Pelotas</li>
        <li>Botines</li>
        <li>Camisetas</li>
      </ul>

        <CarWidget/>
    </nav>
    )
}

const saludo = "Hola mundo"

export default NavBar