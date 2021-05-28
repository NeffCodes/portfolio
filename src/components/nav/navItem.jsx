import React from 'react';

export const NavItem = ({title, destination}) => {
    return (
        <li>
            <a href={destination}>
                {title}
            </a>
        </li>
    )
}

