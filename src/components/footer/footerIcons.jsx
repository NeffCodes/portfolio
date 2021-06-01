import React from 'react';

export const SocialIcons = () => {
    const socials = [
        {name: 'codepen', icon: 'codepen', destination: 'https://codepen.io/Persigio'},
        {name: 'github', icon:'github', destination: 'https://github.com/persigio'},
        {hame: 'linkedin', icon: 'linkedin', destination: 'https://www.linkedin.com/in/james-m-neff/'}
    ];
    return (
        <div className='social-icons'>
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
        </div>
    )
}
