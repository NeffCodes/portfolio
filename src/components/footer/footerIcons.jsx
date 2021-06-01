import React from 'react';

export const SocialIcons = () => {
    
    const socials = [
        {name: 'CodePen', icon: 'codepen', destination: 'https://codepen.io/Persigio'},
        {name: 'GitHub', icon:'github', destination: 'https://github.com/persigio'},
        {hame: 'LinkedIn', icon: 'linkedin', destination: 'https://www.linkedin.com/in/james-m-neff/'}
    ];

    return (
        <div className='social-icons'>
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
