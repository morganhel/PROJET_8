import { Link } from 'react-router-dom';
import '../../index.css';
import logements from '../../logements.json';
import Card from '../Card/card';

function Gallery() {
    return (
        <div className='gallery'>
            {logements.map(logement => {
                return (
                    <Link to={`/logement/${logement.id}`}>
                    <Card id={logement.id} image={logement.cover} title={logement.title} />
                    </Link>
                )
            })} 
        </div>
    )

}

export default Gallery