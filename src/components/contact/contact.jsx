import React from 'react';
import { ExternalButton } from '../button/externalButton/externalButton';

const Contact = () => {
    return(
        <section className='contact' id='Contact'>
            <h2>
                Say Hello
            </h2>
            <p>Would you like to work with me or have a question?</p>
            <p>Don't be shy, let me know! </p>
            <ExternalButton content="Let's Talk" destination='mailto:test@gmail.com'/>
        </section>
    )
}

export default Contact;