import React from 'react';
import { Link } from 'gatsby';
import { NavItem } from './navItem';
import Logo from '../../../images/assets/logo.svg';

const Nav = () => {
    return (
        <nav role='navigation' className='nav'>
            <ul className='nav-container'>
                <li key='nav-logo' className='nav-logo'>
                    <Link to='/' role='button'>
                        <Logo className='logo'/>
                    </Link>
                </li>
                <NavItem destination='/#About' title='About' icon='far fa-user' classes='nav-item'/>
                <NavItem destination='/portfolio' title='Portfolio' icon='fas fa-desktop' classes='nav-item'/>
                <NavItem destination='/#Contact' title='Contact' icon='far fa-paper-plane' classes='nav-item'/>
            </ul>
        </nav>
    )
}

export default Nav;