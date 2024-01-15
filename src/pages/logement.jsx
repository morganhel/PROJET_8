import { useState, useEffect } from "react";
import { Navigate, useParams} from 'react-router-dom';
import logements from '../logements.json';
import Error from '../pages/error';
import '../index.css';
import Tags from '../components/Tags/tags'
import Collapse from '../components/Collapse/collapse';
// import Slideshow from '../components/Slideshow/slideshow';

function Logement() {
    const {id} = useParams()
    const logement = logements.find((l) => l.id.toString() === id);
    

    return (
    <>
        {!logement ? 
            (<Navigate replace to="/404" />) : (
            <main>
                <section>
                    {/* <Slideshow /> */}
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
                            <img src={logement.host.picture}></img>
                        </div>
                        <div></div>
                    </div>
                </section>

                <section className="info2">
                    <Collapse title="Description" txt={logement.description}/>
                    <Collapse title="Equipement" txt={logement.equipments}/>
                </section>
            </main>
        )}
    </>
    )
}

export default Logement