import React from 'react';
import '../index.css';
import Banner from '../components/banner/Banner';
import Background from '../assets/images/banner_about.png';
import Collapse from '../components/collapse/Collapse';
import Data from '../about.json';

function About() {

    return (
        <main>
            <Banner image={Background} txt=""/>
            <div className='about'>
                {Data.map((paragraph)=>{
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