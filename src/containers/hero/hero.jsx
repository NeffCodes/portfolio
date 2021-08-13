import React from 'react';
import { InternalButton } from '../../components/button/Buttons';
import { userName } from '../../components/context';

const Hero = () => {
    return(
        <section className='hero'>
            <h1>
                Hello! I am <span className='hero-alt'>{ userName },</span>
                <br/>
                Web Developer &amp; Graphic Designer
            </h1>
            <InternalButton content='Check Me Out' destination='/#About'/>
        </section>
    )
}

export default Hero;