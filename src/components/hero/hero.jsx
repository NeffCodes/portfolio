import React from 'react';
import {Button} from '../button/button';

const Hero = () => {
    return(
        <section className='hero'>
            <h1>
            Ciao! I am <span style={{color: 'var(--primary-color)'}}>Persigio,</span>
            <br/>
            a real person
            </h1>
            <Button classes='btn primary' content='Check Me Out' destination='#About'/>
        </section>
    )
}

export default Hero;