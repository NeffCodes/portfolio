import React from 'react';

class Nav extends React.Component {
    render(){
        return (
            <nav role='navigation'>
                <ul>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;