import React, {useState, useEffect} from 'react';
import {Button} from '../button/button';
import {SkillTags} from './skillTags';

const About = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsLargeScreen(false);
        } else {
            setIsLargeScreen(true);
        }
    }, []);

    return(
        <section className='about' id='About'>
            <h2>
                About
            </h2>
            <div>
                {isLargeScreen && (
                    <div className='portrait' aria-hidden='true'>
                        <div className='shape'></div>
                    </div>
                )}
                
                <div className='description'>
                    <p>
                        Blah blah blah, I need to figure out my short elevator pitch to put here. Yadda yadaa, in short, please hire me, I would like money. 
                    </p>
                    <SkillTags />
                    <Button classes='btn primary' content='See My Work' /> 
                </div>
            </div>    
        </section>
    )
}

export default About;