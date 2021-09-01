import React from 'react';
import { Link } from 'gatsby';

export const NavItem = ({title, destination, icon, classes}) => {
    return (
        <li key={`nav-${title}`} className={classes}>
            <Link to={destination} role="button">
                <i className={`${icon}`}/>
                {title}
            </Link>
        </li>
    )
}

