import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    render() {
        const { message, result } = this.props;
        const color = result ? 'green' : 'red';
        console.log(result);
        return (
            <div className='Message-container'>
                <div className='Message-content'>
                    <p style={{ color: color }} className="Message-text Message-white">{message}</p>
                </div>
            </div>
        )
    }
}

export default Message;