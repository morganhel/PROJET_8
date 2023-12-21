import '../../index.css';
import logements from '../../logements.json';
import Card from '../Card/card';

function Gallery() {
    return (
        <div className='gallery'>
            {logements.map(logement => {
                return (
                    <Card image={logement.cover} title={logement.title} />
                )
            })} 
        </div>
    )

}

export default Gallery