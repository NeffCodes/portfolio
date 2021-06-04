import React from 'react';
import { Link } from 'gatsby';
import { btn, primary } from './button.module.css';

export const InternalButton = ({destination, content}) => {
    return (
        <Link to={destination} className={`${btn} ${primary}`} role='button'>{content}</Link>
    )
}
