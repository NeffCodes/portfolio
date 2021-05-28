import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Contact from '../components/contact/contact';

const App = () => {
    return(
        <main>
            <Nav /> 
            <Hero />
            <About />
            <Contact />
        </main>
    )
}

export default App;