import React, { Component } from 'react';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

class Messages extends Component {
    render() {
        const { generateMessages, results } = this.props;

        return (
            <ScrollToBottom className='Messages'>
                {
                    generateMessages().map((message, i) => {
                        if (message) {
                            return <div key={i}><Message message={message} result={results[i]} /></div>
                        }
                    })
                }
            </ScrollToBottom>
        );
    }
}

export default Messages;