import React from 'react';
import { ExternalButton } from '../../components/button/externalButton';


const Contact = () => {
    return(
        <section className='contact' id='Contact'>
            <h2>Give a Shout</h2>
            <p>Have a question or just want to chat?</p>
            <p>Don't be shy, let me know! </p>
            <ExternalButton content="Say Hello" destination='mailto:test@gmail.com'/>
        </section>
    )
}

export default Contact;