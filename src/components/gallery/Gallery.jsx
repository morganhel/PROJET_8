import { Link } from 'react-router-dom';
import '../../index.css';
import logements from '../../logements.json';

function Gallery() {
    return (
        <div className='gallery'>
            {/* on parcour les objets du tableau du fichier logement */}
            {logements.map(logement => {
                // pour chaque objet = logement on créé une carte avec une image et un titre
                return (
                    <Link to={`/logement/${logement.id}`}> 
                    {/* chaque carte est cliquable et renvoie à la page de description du logement grâce à l'id */}
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