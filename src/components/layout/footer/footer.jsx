import React from 'react';
import { userName, socials } from '../../context';

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='social'>
        {socials.map( (social) => {
          return(
            <a
              key={social.key}
              href={social.destination}
              rel='noopener noreferrer'
              target='_blank'
              aria-label={social.name}
            >
              <i 
                className={`fab fa-${social.icon} social-icon`}
                aria-hidden='true'
              />
            </a>
          );
        })}
      </div>

      <p className='footer-text'>
        Copyright &#169; {new Date().getFullYear()} - { userName }
      </p>
    </footer>
  )
};

export default Footer;
