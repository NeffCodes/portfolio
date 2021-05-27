import React from 'react';

import Button from '../button/button';

class Hero extends React.Component {
    render (){
        return(
            <section className='hero'>
                <h1>
                Ciao! I am <span style={{color: 'var(--primary-color)'}}>Persigio,</span>
                <br/>
                a real person
                </h1>
                <Button class='primary' type='Check Me Out' />
            </section>
        )
    }
}

export default Hero;