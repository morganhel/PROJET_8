import Background from '../../assets/images/banner.png'
import '../../main.css'

function Banner() {
    return (
		<div className="banner">
			<img className="banner__img" src={Background} alt="arrière plan bannière"/>
			<p className="banner__text">Chez vous, partout et ailleurs</p>
		</div>
	);
}

export default Banner;