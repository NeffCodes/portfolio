import React from 'react';
import { NavItem } from './navItem';
import useWindowSize from '../../utils/useWindowSize';

const Nav = () => {
    const { width } = useWindowSize();

    return (
        <nav role='navigation' className='nav'>
            <ul className='nav-container'>
                {width > 1023 && (<li className='logo'>JNeff</li>)}
                <NavItem destination='/#About' title='About' icon='far fa-user'/>
                <NavItem destination='/works' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='/#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;