import * as React from 'react';

import '../../styles/normalize.css';

import { Helmet } from 'react-helmet';
import Nav from './nav/nav';
import Footer from './footer/footer';

const Layout = ({children, pageTitle}) => {
    return(
        <div >
            <Helmet>
                <meta charSet="utf-8"/>
                <title>JNeff: {pageTitle || 'Portfolio'}</title>
                <html lang='en'/>
                <meta name='description' content='JNeff Portfolio'/>
                <script src="https://kit.fontawesome.com/05e397c018.js" crossOrigin="anonymous"></script>
            </Helmet>
            <Nav/>
            <main className='layout'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;