import React from 'react';
import {NavItem} from './navItem';

const Nav = () => {
    return (
        <nav role='navigation'>
            <ul>
                <NavItem destination='#About' title='About' icon='far fa-user'/>
                <NavItem destination='#' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;