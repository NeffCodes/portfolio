import React from 'react';

class NavItem extends React.Component {
    render(){
        return (
            <li>
                <a href={this.props.destination}>
                    {this.props.title}
                </a>
            </li>
        )
    }
}

export default NavItem;