import React from 'react';
import { ExternalButton } from '../../components/button/Buttons';
import { email } from '../../components/context';


const Contact = () => {
    return(
        <section className='contact' id='Contact'>
            <div className='content'>
                <h2>Get In Touch</h2>
                <p>Have a question or just want to chat?</p>
                <p>Don't be shy, let me know! </p>
                <ExternalButton content="Say Hello" destination={`mailto:${ email }`}/>
            </div>
        </section>
    )
}

export default Contact;