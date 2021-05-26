import React from 'react';

class Hero extends React.Component {
    render (){
        return(
            <section className='hero'>
                <h1>
                Ciao! I am <span style={{color: 'var(--primary-color)'}}>Persigio,</span>
                <br/>
                a real person
                </h1>
            </section>
        )
    }
}

export default Hero;