import React from 'react';
import { SocialIcons } from './socialIcons';


const Footer = () => {
    return(
        <footer>
            <SocialIcons />
            <hr />
            <p>
                Copyright &#169; {new Date().getFullYear()} - James Neff - Created with Gatsby
            </p>
        </footer>
    )
}

export default Footer;