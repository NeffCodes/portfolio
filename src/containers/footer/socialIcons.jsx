import React from 'react';
import { socialicons } from './footer.module.css'
import { socials } from '../../components/context';

export const SocialIcons = () => {
    return (
        <div className={socialicons}>
        {
            socials.map( (social) => {
                return(
                    <a
                        key={social.name}
                        href={social.destination}
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label={social.name}
                    >
                        <i 
                        className={`fab fa-${social.icon} fa-2x`}
                        aria-hidden='true'
                        />
                    </a>
                );
            })
        }
        </div>
    )
}
