import React from 'react';
import {btn,primary} from './button.module.css';

export const ExternalButton = ({destination, content}) => {
    return (
        <a className={`${btn} ${primary}`} href={destination} role='button'>
            {content}
        </a>
    )
}