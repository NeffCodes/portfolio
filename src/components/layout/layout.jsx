import * as React from 'react';

import '../../styles/normalize.css';

import { Helmet } from 'react-helmet';
import Nav from './nav/nav';
import Footer from './footer/footer';

const Layout = ({children, pageTitle}) => {
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>JNeff: {pageTitle || 'Portfolio'}</title>
                <html lang='en'/>
                <meta name='description' content='J Neff, designer and developer, welcome to my personal website.'/>
                <script src="https://kit.fontawesome.com/05e397c018.js" crossOrigin="anonymous"></script>
            </Helmet>
            <Nav/>
            <main>
                <div className='layout'>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;