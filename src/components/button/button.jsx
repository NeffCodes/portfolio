import React from 'react';
class Button extends React.Component {
    render(){
        return (
            <a className={this.props.class} href={this.props.destination}>
                {this.props.content}
            </a>
        )
    }
}

export default Button;