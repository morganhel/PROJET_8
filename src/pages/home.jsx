import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '../components/Banner/banner';
import Gallery from '../components/Gallery/gallery';
import '../index.css'

class Home extends React.Component {
  render() {
    return (
      <main>
        <Banner />
        <Gallery />
      </main>
    );
  }
}

export default Home;
