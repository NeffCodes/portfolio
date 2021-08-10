import React from 'react';
import { btn } from './button.module.css';
import { secondary } from './secondaryButton.module.css';
import * as Icons from './icon.module.css';

export const ExternalSecondaryButton = ({destination, content, icon, download}) => {
    const addIcon = icon ? Icons[icon] : null;
    if(icon === 'download'){
    return (
        <a className={`${btn} ${secondary} ${addIcon}`} href={destination} role='button' target='_blank' rel="noreferrer" download={download}>
            {content}
        </a>
    )
    }
    return (
        <a className={`${btn} ${secondary} ${addIcon}`} href={destination} role='button' target='_blank' rel="noreferrer">
            {content}
        </a>
    )
}