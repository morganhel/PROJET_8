import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../index';

function Collapse({title,txt}){

    const [showContent, setshowContent] = useState(false); //on défini le state de showContent, initialisé à false par défaut

    function Show() {
      // fonction qui modifie la valeur de showContent au click
      setshowContent(!showContent);
    }


    return (
      // on affiche le composant collapse replié
        <div className="collapse">
            <div onClick={Show} className="collapse__title">
                <h2 className="collapse__title--txt">{title}</h2>
                <span className={`collapse__title--icon ${showContent ? "rotated" : ""}`}>
                  {/* si le state de show content est true on applique l'animation rotated à l'icon chevron  */}
					        <FontAwesomeIcon icon={faChevronUp} size="lg" />
				        </span>
            </div>
            <div className={`collapse__content ${showContent ? "appear" : ""}`}>{txt}</div>
            {/* si le state de show content est true on affiche le texte avec l'animation appear */}
        </div>
  );
}

export default Collapse;