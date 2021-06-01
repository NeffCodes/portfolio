import React from 'react';

export const NavItem = ({title, destination, icon, hidden}) => {
    return (
        <li hidden={hidden}>
            <a href={destination}>
                <i className={`${icon} fa-sm`}/>
                {title}
            </a>
        </li>
    )
}

