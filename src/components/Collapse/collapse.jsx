import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../index';

function Collapse({title,txt}){

    const [showContent, setshowContent] = useState(false);

    function Show() {
      setshowContent(!showContent);
    }

    return (
        <div className="collapse">
            <div onClick={Show} className="collapse__title">
                <h2 className="collapse__title--txt">{title}</h2>
                <span className={`collapse__title--icon ${showContent ? "rotated" : ""}`}>
					<FontAwesomeIcon icon={faChevronUp} size="lg" />
				</span>
            </div>
            <div className={`collapse__content ${showContent ? "appear" : ""}`}>{txt}</div>
        </div>
  );
}

export default Collapse;