import React from 'react';
import { NavItem } from './navItem';
import useWindowSize from '../../../utils/useWindowSize';

const Nav = () => {
    const { width } = useWindowSize();
    const [w, setW] = React.useState(width)
        
    //useEffect courtesy of Vitalie Maldur from dev.to
    React.useEffect(() => {
        const resizeListener = () => {
            setW(width)
        }
        //set resize listener
        if(typeof window !== 'undefined'){
            window.addEventListener('resize',resizeListener);
        }
        
        //clean up
        return () => {
            if(typeof window !== 'undefined'){
                window.removeEventListener('resize', resizeListener);
            }
        }
    }, [width]);

    return (
        <nav role='navigation' className='nav'>
            <ul className='nav-container'>
                {w > 1023 && (<li className='logo'>JNeff</li>)}
                <NavItem destination='/#About' title='About' icon='far fa-user'/>
                <NavItem destination='/works' title='Works' icon='fas fa-desktop'/>
                <NavItem destination='/#Contact' title='Contact' icon='far fa-paper-plane'/>
            </ul>
        </nav>
    )
}

export default Nav;