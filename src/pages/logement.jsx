import { Navigate, useParams} from 'react-router-dom';
import logements from '../logements.json';
import '../index.css';
import Tags from '../components/tags/Tags';
import Collapse from '../components/collapse/Collapse';
import Slideshow from '../components/slideshow/Slideshow';
import Rating from '../components/rating/Rating';

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
                        <Tags className="info__logement--tags" tags={logement.tags} />
                    </div>

                    <div className="info__host">
                        <div className="info__host--name">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt="visage de l'hote"></img>
                        </div>
                        <Rating  score={logement.rating}/>
                    </div>
                </section>

                <section className="info2">
                    <Collapse title="Description" txt={logement.description}/>
                    <Collapse title="Equipement" txt={
                        <ul>
                            {logement.equipments.map((equipment, index) =>
                                <li key={index} className="listEquipments">{equipment}</li>)}
                        </ul>}/>
                </section>
            </main>
        )}
    </>
    )
}

export default Logement