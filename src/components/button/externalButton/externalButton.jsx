import React from 'react';
import {btn, secondaryBtn} from './exbutton.module.css';

export const ExternalButton = ({destination, content}) => {
    return (
        <a className={btn} href={destination} role='button'>
            {content}
        </a>
    )
}

export const ExternalSecondaryButton = ({destination, content}) => {
    return (
        <a className={secondaryBtn} href={destination} role='button'>
            {content}
        </a>
    )
}
