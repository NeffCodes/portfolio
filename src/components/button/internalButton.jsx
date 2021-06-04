import React from 'react';
import { Link } from 'gatsby';
import { btn } from './button.module.css';
import { primary } from './primaryButton.module.css';

export const InternalButton = ({destination, content}) => {
    return (
        <Link to={destination} className={`${btn} ${primary}`} role='button'>{content}</Link>
    )
}
