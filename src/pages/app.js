import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

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