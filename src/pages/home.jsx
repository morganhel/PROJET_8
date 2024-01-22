import React from 'react';
import Background from '../assets/images/banner_home.png';
import Gallery from '../components/gallery/Gallery';
import '../index.css';

function Home (){
  return (
    <main>
      <div className="banner">
			  <img className="banner__img" src={Background} alt="arrière plan bannière"/>
			  <p className="banner__text">Chez vous, <br className='banner__mobile'/>partout et ailleurs</p>
		  </div>
      <Gallery />
      {/* composant react pour l'affichage des cartes logements */}
    </main>
    );
}

export default Home;
