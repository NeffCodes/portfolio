import React from 'react';
import {btn, secondary} from './button.module.css';
import * as Icons from './icon.module.css';

export const ExternalSecondaryButton = ({destination, content, icon}) => {
    const addIcon = icon ? Icons[icon] : null;
    return (
        <a className={`${btn} ${secondary} ${addIcon}`} href={destination} role='button'>
            {content}
        </a>
    )
}