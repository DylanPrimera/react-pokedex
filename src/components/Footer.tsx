import { Link } from "react-router-dom"
import { PicachuIcon, PokeballIcon, PokeballMapIcon } from "./Icons"
import "../styles/Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
        <Link to="/pokemons" className="footerLink">
           <PicachuIcon className={'footerIcon'}/>
           Pokemons     
        </Link>
        <Link to="/items" className="footerLink">
           <PokeballIcon className={'footerIcon'}/>
           Items     
        </Link>
        <Link to="/map" className="footerLink">
           <PokeballMapIcon className={'footerIcon'}/>
           Map     
        </Link>
    </footer>
  )
}
