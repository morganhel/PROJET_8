import Logo from '../assets/images/LOGO.svg'
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
        <div>
            <img src={Logo} alt="logo kasa" />
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
        </nav>
        </header>
    )
}

export default Header