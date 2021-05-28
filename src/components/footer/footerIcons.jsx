import React from 'react';

export const SocialIcons = () => {
    const socials = [
        {name: 'git', icon:'git-alt', destination: 'https://github.com/persigio'},
        {name: 'codepen', icon: 'codepen', destination: 'https://codepen.io/Persigio'},
        {hame: 'linkedin', icon: 'linkedin', destination: 'https://www.linkedin.com/in/james-m-neff/'}
    ];
    return (
        <span className='social-icons'>
        {
            socials.map( (social) => {
                if(social){
                    return(
                        <a
                            key={social.name}
                            href={social.destination}
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label={social.name}
                        >
                            <i className={`fab fa-${social.icon} fa-2x`}/>
                        </a>
                    );
                }
            })
        }
        </span>
    )
}
