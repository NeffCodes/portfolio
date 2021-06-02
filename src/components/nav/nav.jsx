import React, {useState, useEffect} from 'react';
import {NavItem} from './navItem';

const Nav = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsLargeScreen(false);
        } else {
            setIsLargeScreen(true);
        }
    }, []);

    return (
        <nav role='navigation'>
            <ul>
                {isLargeScreen && (<NavItem destination='#' title='JNeff'/>)}
                <NavItem destination='#About' title='About' icon='far fa-user'/>
                <NavItem destination='#' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;