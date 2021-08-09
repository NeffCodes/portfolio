import React from 'react';
import { btn } from './button.module.css';
import { secondary } from './secondaryButton.module.css';
import * as Icons from './icon.module.css';

export const ExternalSecondaryButton = ({destination, content, icon}) => {
    const addIcon = icon ? Icons[icon] : null;
    return (
        <a className={`${btn} ${secondary} ${addIcon}`} href={destination} role='button' target='_blank' rel="noreferrer">
            {content}
        </a>
    )
}