import React from 'react';
import '../index.css';
import Banner from '../components/Banner/banner';
import Background from '../assets/images/banner_about.png';

function About() {

    return (
        <main>
            <Banner image={Background} txt=""/>
        </main>
    )
}

export default About 