import React from 'react';
import { Link } from 'gatsby';

export const InternalButton = ({destination, content}) => {
    return (
        <Link 
          to={destination} 
          className='btn primary'
          role='button'
        >
            {content}
        </Link>
    )
};

export const ExternalButton = ({destination, content}) => {
    return (
        <a 
          className='btn primary' 
          href={destination}
          role='button' 
          target='_blank' 
          rel="noreferrer"
        >
            {content}
        </a>
    )
};

export const ExternalSecondaryButton = ({destination, content, icon, download}) => {
    if(download){
        return (
            <a 
            className={`btn secondary ${icon}`} 
            href={destination} 
            role='button' 
            target='_blank' 
            rel="noreferrer" 
            download={download}
            >
                {content}
            </a>
        )
    }
    return (
        <a 
          className={`btn secondary ${icon}`} 
          href={destination} 
          role='button' 
          target='_blank' 
          rel="noreferrer"
        >
            {content}
        </a>
    )
};

