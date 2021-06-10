import React, { useState, useEffect } from 'react';
import { InternalButton } from '../../components/button/internalButton';
import { ExternalSecondaryButton } from  '../../components/button/externalSecondaryButton';
import { SkillTags } from './skillTags/skillTags';
import { getWidth } from '../../components/logic';
import { description, portrait, shape, about } from './about.module.css';

const About = () => {
    const [width, setWidth] = useState(getWidth());
    
    //useEffect courtesy of Vitalie Maldur from dev.to
    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        }
        //set resize listener
        window.addEventListener('resize',resizeListener);
        //clean up
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return(
        <section id='About'>
            <h2>About</h2>
            <div className={ about }>
                {width > 1023 && (
                    <div className={portrait} aria-hidden='true'>
                        <div className={shape}></div>
                    </div>
                )}
                
                <div className={description}>
                    <p>
                        Blah blah blah, I need to figure out my 
                        short elevator pitch to put here. Yadda yadaa, 
                        in short, please hire me... 
                    </p>
                    <SkillTags />
                    <div>
                        <InternalButton destination='/works' content='See My Work' /> 
                        <ExternalSecondaryButton destination='' content='Resume' icon='download'/>
                    </div> 
                </div>
            </div>    
        </section>
    )
}

export default About;