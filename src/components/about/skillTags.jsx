import React from 'react';

const SkillTags = () => {
    const skills = ['css3-alt','html5','js-square','react','node','figma'];

    {skills.forEach( skill => {
        return (<i className={`fab fa-${skill} fa-3x`}/>)
    });}
}

export default SkillTags;