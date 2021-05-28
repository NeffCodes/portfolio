import React from 'react';

class SkillTag extends React.Component {
    render (){
        return(
            <i className={`fab fa-${this.props.name} fa-3x`}/>
        )
    }
}

export default SkillTag;