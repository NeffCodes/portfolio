import React from 'react';
import {Link} from 'gatsby';
import {btn} from './inbutton.module.css';

export const InternalButton = ({destination, content}) => {
    return (
        <Link to={destination} className={btn} role='button'>{content}</Link>
    )
}
