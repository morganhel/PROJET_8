import React from 'react';
import '../index.css';
import Background from '../assets/images/banner_about.png';
import Collapse from '../components/collapse/Collapse';
import Data from '../about.json'; //fichier qui contient les titres et textes de la page about

function About() {

    return (
        <main>
            <div className="banner">
			    <img className="banner__img" src={Background} alt="arrière plan bannière"/>
		    </div>
            <div className='about'>
                {/* on parcour les objets du tableau du fichier about */}
                {Data.map((paragraph)=>{
                    // pour chaque objet on créé un élément collapse avec un titre et un contenu texte
                    return (
                        <div key={paragraph.id}>
                            <Collapse title={paragraph.title} txt={paragraph.txt}/>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default About 