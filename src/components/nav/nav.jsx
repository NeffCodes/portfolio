import React from 'react';
import NavItem from '../navItem/navItem';

class Nav extends React.Component {
    render(){
        return (
            <nav role='navigation'>
                <ul>
                    <NavItem destination='' title='About' icon=''/>
                    <NavItem destination='' title='Works' icon=''/>
                    <NavItem destination='' title='Contact' icon=''/>
                </ul>
            </nav>
        )
    }
}

export default Nav;