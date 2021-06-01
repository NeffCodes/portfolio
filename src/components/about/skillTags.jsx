import React from 'react';

export const SkillTags = () => {
    
    const skills = [
        {name:'CSS', icon:'css3-alt'},
        {name:'HTML5', icon:'html5'},
        {name:'Javascript', icon:'js-square'},
        {name:'React-Redux', icon:'react'},
        {name:'git', icon:'git'},
        {name:'Figma', icon:'figma'},
        {name:'Node', icon:'node'}
        ];

    return (
        <div className='icons'>
        {
            skills.map( (skill) => {
                return(
                    <>
                    <i 
                    key={skill.name} 
                    className={`fab fa-${skill.icon} fa-3x`} 
                    title={skill.name}
                    aria-hidden='true'
                    />
                    <span class='sr-only'>
                        {skill.name}
                    </span>
                    </>
                );
            })
        }
        </div>
    )
}
