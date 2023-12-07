import Logo from '../../assets/images/LOGO.svg'
import { Link } from 'react-router-dom'

 
function Header() {
    return (
        <header className='header'>
        <div className='header__logo'>
            <img src={Logo} alt="logo kasa" />
        </div>
        <nav className='header__nav'>
            <Link to="/" className='header__nav--link'>Accueil</Link>
            <Link to="/about" className='header__nav--link'>A propos</Link>
        </nav>
        </header>
    )
}

export default Header