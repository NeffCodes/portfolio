import React from 'react';
class Button extends React.Component {
    render(){
        return (
            <buttton className={this.props.class} type='button'>
                {this.props.content}
            </buttton>
        )
    }
}

export default Button;