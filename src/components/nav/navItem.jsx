import React from 'react';

export const NavItem = ({title, destination, icon}) => {
    return (
        <li>
            
            <a href={destination}>
                <i className={`${icon} fa-sm`}/>
                {title}
            </a>
        </li>
    )
}

