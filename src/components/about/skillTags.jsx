import React from 'react';

export const SkillTags = () => {
    const skills = ['css3-alt','html5','js-square','react','node','figma'];
    return (
        <span className='icons'>
        {
            skills.map( (skill, index) => {
                return(
                    <i key={index} className={`fab fa-${skill} fa-3x`}/>
                );
            })
        }
        </span>
    )
}
