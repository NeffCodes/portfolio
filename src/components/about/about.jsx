import React from 'react';
import Button from '../button/button';
import SkillTags from './skillTags';

class About extends React.Component {
    render (){
        return(
            <section className='about' id='About'>
                <h2>
                    About
                </h2>
                <p>
                    Blah blah blah, I need to figure out my short elevator pitch to put here. Yadda yadaa, in short, please hire me, I would like money. 
                </p>
                <span className='icons'>
                    <SkillTags />
                </span>
                <Button class='btn primary' content='See My Work' />
            </section>
        )
    }
}

export default About;