import { Navigate, useParams} from 'react-router-dom';
import logements from '../logements.json';
import '../index.css';
import Collapse from '../components/collapse/Collapse';
import Slideshow from '../components/slideshow/Slideshow';
import FullStar from '../assets/images/star_full.png';
import EmptyStar from '../assets/images/star_empty.png';

function Logement() {
    const {id} = useParams()
    const logement = logements.find((l) => l.id.toString() === id);
    // on construit la variable logement qui cherche dans le tableau logements l'id du logement qui correspond à celui dans l'adresse de la page
    //et récupère le logement associé
    return (
    <>
        {!logement ? 
            // si le logement n'existe pas on retourne sur la page erreur
            (<Navigate replace to="/404" />
            ) : (
            // sinon on construit la page du logement 
            <main>
                <section>
                    {/* composant qui affiche le carroussel des images du logement */}
                    <Slideshow pictures={logement.pictures} />
                </section>
                <section className="info">
                    <div className="info__logement">
                        <h1 className='info__logement--title'>{logement.title}</h1>
                        <p className="info__logement--loc">{logement.location}</p>
                        <ul key={ logement.tags.id } className="info__logement--tags">
                            {logement.tags.map((tags, index) =>
                            <li key={tags[index]} className="item">{tags}</li>)}    
                            </ul>
                    </div>

                    <div className="info__host">
                        <div className="info__host--name">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt="visage de l'hote"></img>
                        </div>
                        <div className="info__host--rate">
                            {/* on parcour un tableau avec les valeurs possibles des notes */}
			                {[1, 2, 3, 4, 5].map((level) => logement.rating >= level ? (
                            // si la note donnée au logement et supérieur à la valeur on affiche une étoile pleine  
					        <img key={level.toString()} className="star" src={FullStar} alt="étoile pleine"/>
				            ) : (
                            //si la valeur dépasse la note donnée on affiche une étoile vide 
					        <img key={level.toString()} className="star" src={EmptyStar} alt="étoile vide"/> ))}
		                </div>
                    </div>
                </section>

                <section className="info2">
                    {/* on réutilise l'élément collapse pour la dercription et les équipements */}
                    <Collapse title="Description" txt={logement.description}/>
                    <Collapse title="Equipement" txt={
                        //on construit une liste des équipements présent dans l'objet equipents 
                        <ul className="info2__equipments">
                            {logement.equipments.map((equipment, index) =>
                                <li key={index} className="info2__equipments--items">{equipment}</li>)}
                        </ul>}/>
                </section>
            </main>
        )}
    </>
    )
}

export default Logement