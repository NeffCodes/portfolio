import React from 'react';
import { skills } from '../../../components/context';
import { icons } from './skillTags.module.css';

export const SkillTags = () => {
    return (
        <div className={icons}>
        {
            skills.map( (skill) => {
                return(
                    <div key={`skill-${skill.name}`} >
                        <i 
                        className={`fab fa-${skill.icon} fa-3x`} 
                        title={skill.name}
                        aria-hidden='true'
                        />
                        <span className='sr-only'>
                            {skill.name}
                        </span>
                    </div>
                );
            })
        }
        </div>
    )
}
