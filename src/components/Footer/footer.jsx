import Logo from '../../assets/images/logo_footer.svg'
 
function Footer() {
    return (
        <footer>
        <div>
            <img src={Logo} alt="logo kasa" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer