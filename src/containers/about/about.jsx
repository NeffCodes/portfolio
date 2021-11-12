import React from 'react';
import { InternalButton, ExternalSecondaryButton } from '../../components/button/Buttons';
import { 
    aboutDescription, 
    resume,
    skills 
} from '../../components/context';


const About = () => {

    return(
        <section id='About'>
            <div className='content'>
                <h2>About Me</h2>
                <div className='about'>           
                    <div className='description'>
                        {aboutDescription.map( paragraph => <p>{paragraph}</p>)}
                        <div className='skills'>
                            {skills.map( (skill) => {
                                return(
                                    <div key={ skill.key } >
                                        <i 
                                        className={`fab fa-${skill.icon} skill-icon`} 
                                        title={skill.name}
                                        aria-hidden='true'
                                        />
                                        <span className='sr-only'>
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <InternalButton destination='/portfolio' content='See My Work' /> 
                            {resume ? (<ExternalSecondaryButton destination={ resume } content='Resume' icon='download'/>) : null}
                        </div> 
                    </div>
                </div>   
            </div> 
        </section>
    )
}

export default About;
