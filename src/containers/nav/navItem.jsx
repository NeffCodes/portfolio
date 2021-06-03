import React from 'react';
import { Link } from 'gatsby';

export const NavItem = ({title, destination, icon}) => {
    return (
        <li>
            <Link to={destination} role="button">
                <i className={`${icon} fa-sm`}/>
                {title}
            </Link>
        </li>
    )
}

