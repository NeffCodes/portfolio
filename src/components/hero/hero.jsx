import React from 'react';
import {InternalButton} from '../button/internalButton/internalButton';
import {hero} from './hero.module.css';

const Hero = () => {
    return(
        <section className={hero}>
            <h1>
                Ciao! I am <span style={{color: 'var(--primary-color)'}}>Persigio,</span>
                <br/>
                a real person
            </h1>
            <InternalButton content='Check Me Out' destination='/#About'/>
        </section>
    )
}

export default Hero;