import React from 'react';
import { NavItem } from './navItem';

const Nav = () => {
    return (
        <nav role='navigation' className='nav'>
            <ul className='nav-container'>
                <NavItem destination='/' title='JNeff' classes='nav-logo'/>
                <NavItem destination='/#About' title='About' icon='far fa-user' classes='nav-item'/>
                <NavItem destination='/portfolio' title='Works' icon='fas fa-desktop' classes='nav-item'/>
                <NavItem destination='/#Contact' title='Contact' icon='far fa-paper-plane' classes='nav-item'/>
            </ul>
        </nav>
    )
}

export default Nav;