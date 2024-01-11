import { useParams} from 'react-router-dom';
import logements from '../logements.json';
import Error from '../pages/error';
import '../index.css';
import Tags from '../components/Tags/tags'

function Logement() {
    const {id} = useParams()
    const logement = logements.find((l) => l.id.toString() === id);

    return (
        <main>
            <section>
                {/* <Slideshow /> */}
            </section>
            <section className="info">
                <div className="info__logement">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tags tags={logement.tags} />
                </div>

                <div className="info__host">
                    <div>
                        <p>{logement.host.name}</p>
                        <img></img>
                    </div>
                    <i></i>
                </div>



            </section>
        </main>
    )
}

export default Logement