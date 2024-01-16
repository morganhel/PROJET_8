import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '../components/banner/Banner';
import Background from '../assets/images/banner_home.png';
import Gallery from '../components/gallery/Gallery';
import '../index.css';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Banner image={Background} txt="Chez vous, partout et ailleurs"/>
        <Gallery />
      </main>
    );
  }
}

export default Home;
