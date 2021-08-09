import React from 'react';
import { btn } from './button.module.css';
import { primary } from './primaryButton.module.css';

export const ExternalButton = ({destination, content}) => {
    return (
        <a className={`${btn} ${primary}`} href={destination} role='button' target='_blank' rel="noreferrer">
            {content}
        </a>
    )
}