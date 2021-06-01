import React, {useState, useEffect} from 'react';
import {NavItem} from './navItem';

const Nav = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 768) {
        setIsMobile(false);
        } else {
        setIsMobile(true);
        }
    }, []);

    return (
        <nav role='navigation'>
            <ul>
                <NavItem hidden={isMobile} destination='#' title='JNeff'/>                
                <NavItem destination='#About' title='About' icon='far fa-user'/>
                <NavItem destination='#' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;