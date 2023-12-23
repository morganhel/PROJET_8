import '../../index.css'

function Banner({image, txt}) {
    return (
		<div className="banner">
			<img className="banner__img" src={image} alt="arrière plan bannière"/>
			<p className="banner__text">{txt}</p>
		</div>
	);
}

export default Banner;