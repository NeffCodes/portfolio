import React from 'react';
import NavItem from '../navItem/navItem';

class Button extends React.Component {
    render(){
        return (
            <buttton className={this.props.class}>{this.props.type}</buttton>
        )
    }
}

export default Button;