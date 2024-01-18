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

    return (
    <>
        {!logement ? 
            (<Navigate replace to="/404" />) : (
            <main>
                <section>
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
			                {[1, 2, 3, 4, 5].map((level) => logement.rating >= level ? (
					        <img key={level.toString()} className="star" src={FullStar} alt="étoile pleine"/>
				            ) : (
					        <img key={level.toString()} className="star" src={EmptyStar} alt="étoile vide"/> ))}
		                </div>
                    </div>
                </section>

                <section className="info2">
                    <Collapse title="Description" txt={logement.description}/>
                    <Collapse title="Equipement" txt={
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