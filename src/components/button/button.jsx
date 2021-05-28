import React from 'react';

export const Button = ({classes, destination, content}) => {
    return (
        <a className={classes} href={destination}>
            {content}
        </a>
    )
}
