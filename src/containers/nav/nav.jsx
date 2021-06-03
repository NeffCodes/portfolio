import React, { useState, useEffect } from 'react';
import { NavItem } from './navItem';
import './nav.module.css';
import { getWidth } from '../../components/logic';

const Nav = () => {
    const [width, setWidth] = useState(getWidth());
    
    //useEffect courtesy of Vitalie Maldur from dev.to
    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        }
        //set resize listener
        window.addEventListener('resize',resizeListener);
        //clean up
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return (
        <nav role='navigation'>
            <ul>
                {width > 1023 && (<li>JNeff</li>)}
                <NavItem destination='/#About' title='About' icon='far fa-user'/>
                <NavItem destination='/works' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='/#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;