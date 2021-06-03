import React from 'react';
import Nav from '../containers/nav/nav';
import Hero from '../containers/hero/hero';
import About from '../containers/about/about';
import Contact from '../containers/contact/contact';
import Footer from '../containers/footer/footer';

const App = () => {
    return(
        <>
        <Nav /> 
        <main>
            <Hero />
            <About />
            <Contact />
        </main>
        <Footer />
        </>
    )
}

export default App;