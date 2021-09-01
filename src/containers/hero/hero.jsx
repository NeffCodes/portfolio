import React from 'react';
import { InternalButton } from '../../components/button/Buttons';
import { userName } from '../../components/context';

const Hero = () => {
    return(
        <section className='hero'>
            <div className='content'>
                <h1>
                    Hello! I'm <span className='hero-alt'>{ userName }</span>
                </h1>
                <h2 className='subH2'>
                    Web Developer &amp; Graphic Designer
                </h2>
                <InternalButton 
                  content='Learn More'
                  destination='/#About'
                />
            </div>
        </section>
    )
}

export default Hero;