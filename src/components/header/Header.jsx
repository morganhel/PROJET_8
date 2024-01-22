import Logo from '../../assets/images/LOGO.svg';
import { NavLink } from 'react-router-dom';

 
function Header() {
    return (
        <header className='header'>
        <img src={Logo} alt="logo kasa" className='header__logo'/>
        
        <nav className='header__nav'>
            <NavLink to="/" className='header__nav--link'>Accueil</NavLink>
            <NavLink to="/about" className='header__nav--link'>A propos</NavLink>
        </nav>
        </header>
    )
}

export default Header