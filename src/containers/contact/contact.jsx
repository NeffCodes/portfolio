import React from 'react';
import { ExternalButton } from '../../components/button/Buttons';
import { email } from '../../components/context';


const Contact = () => {
    return(
        <section className='contact' id='Contact'>
            <div className='content'>
                <h2>Contact Me</h2>
                <p>Feel free to reach out!</p>
                <ExternalButton content="Email Me" destination={`mailto:${ email }`}/>
            </div>
        </section>
    )
}

export default Contact;