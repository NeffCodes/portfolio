import React from 'react';

export const NavItem = ({title, destination, icon}) => {
    return (
        <li>
            <a href={destination} role="button">
                <i className={`${icon} fa-sm`}/>
                {title}
            </a>
        </li>
    )
}

