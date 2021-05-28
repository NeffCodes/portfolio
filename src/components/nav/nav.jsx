import React from 'react';
import {NavItem} from './navItem';

const Nav = () => {
    return (
        <nav role='navigation'>
            <ul>
                <NavItem destination='#About' title='About' icon=''/>
                <NavItem destination='#' title='Works' icon=''/>
                <NavItem destination='#Contact' title='Contact' icon=''/>
            </ul>
        </nav>
    )
}

export default Nav;