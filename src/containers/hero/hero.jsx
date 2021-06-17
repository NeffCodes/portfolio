import React from 'react';
import { InternalButton } from '../../components/button/internalButton';
import { hero } from './hero.module.css';

import {userName} from '../../components/context';

const Hero = () => {
    return(
        <section className={hero}>
            <h1>
                Hello! I am <span style={{color: 'var(--primary-color)', display: 'inline-block'}}>{userName || 'Persigio'},</span>
                <br/>
                Web Developer & Graphic Designer
            </h1>
            <InternalButton content='Check Me Out' destination='/#About'/>
        </section>
    )
}

export default Hero;