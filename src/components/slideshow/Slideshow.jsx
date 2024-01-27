import { useState } from 'react';
import ArrowLeft from '../../assets/images/arrow_left.png';
import ArrowRight from '../../assets/images/arrow_right.png';

function Slideshow ({pictures}) {
    const [slide, setSlide] = useState(0) //on initialise le state à 0

    const l=pictures.length //longueur du tableau des images du diapo

    const nextSlide = () => {
        setSlide(slide === l -1 ? 0 : slide + 1)
        // on ajoute 1 au state pour passer au slide suivant 
        //et si on est au dernier slide (state à l-1) on remet le state à 0 pour revenir au 1er slide
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? l -1 : slide - 1)
        // on retire 1 au state pour revenir au slide précédent 
        //et si on est au 1er slide (state à 0) on passe le state à l-1 pour aller au dernier slide
    }

    return (
        <section className='slideshow'>
            {/* on affiche les flèches et le compteur si il y a plus d'une image */}
            {l >1 ? (
                <>
                    <img className="slideshow__arrow slideshow__arrow--left" src={ArrowLeft} alt="flèche gauche" onClick={previousSlide}></img>
                    <img className="slideshow__arrow slideshow__arrow--right" src={ArrowRight} alt="flèche droite" onClick={nextSlide}></img>
                    <span className='slideshow__nb'>{slide+1}/{l}</span>
                </>
            )
            : null}


            {pictures.map((image,index) =>{
                //on affiche l'image avec l'id qui correspond au state
                
                return(
                    <img key={index}
                        className={ slide === index ? "slideshow__picture" : "slideshow__picture slideshow__picture--hidden" } 
                        src={image} 
                        alt="appartement">
                    </img>

                )

            })}

        </section>
    )
}

export default Slideshow