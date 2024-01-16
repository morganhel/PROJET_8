import { Link } from 'react-router-dom';
import '../../index.css';
import logements from '../../logements.json';

function Gallery() {
    return (
        <div className='gallery'>
            {logements.map(logement => {
                return (
                    <Link to={`/logement/${logement.id}`}>
                    <article className="card">
                        <img src={logement.cover} alt={logement.title} className="card__img"/>
                        <div className="card__layer">
                            <h2 className="card__title">{logement.title}</h2>
                        </div>
                    </article>
                    </Link>
                )
            })} 
        </div>
    )

}

export default Gallery