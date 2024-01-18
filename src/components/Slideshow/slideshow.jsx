import { useState } from 'react';
import ArrowLeft from '../../assets/images/arrow_left.png';
import ArrowRight from '../../assets/images/arrow_right.png';

function Slideshow ({pictures}) {
    const [slide, setSlide] = useState(0)

    const l=pictures.length

    const nextSlide = () => {
        setSlide(slide === l -1 ? 0 : slide + 1)
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? l -1 : slide - 1)
    }

    return (
        <section className='slideshow'>
            {pictures.lenght !==1 ?(
                <>
                    <img className="slideshow__arrow slideshow__arrow--left" src={ArrowLeft} alt="flèche gauche" onClick={previousSlide}></img>
                    <img className="slideshow__arrow slideshow__arrow--right" src={ArrowRight} alt="flèche droite" onClick={nextSlide}></img>
                    <span className='slideshow__nb'>{slide+1}/{l}</span>
                </>
            )
            : null}

            {pictures.map((image,index) =>{
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