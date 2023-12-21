import Logo from '../../assets/images/logo_footer.svg'
 
function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer