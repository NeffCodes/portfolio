import React from 'react';
import NavItem from '../navItem/navItem';
class Nav extends React.Component {
    render(){
        return (
            <nav role='navigation'>
                <ul>
                    <NavItem destination='' title='About' />
                    <NavItem destination='' title='Works' />
                    <NavItem destination='' title='Contact' />
                </ul>
            </nav>
        )
    }
}

export default Nav;