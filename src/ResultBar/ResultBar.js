import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Message from '../Message/Message';
import Messages from '../Messages/Messages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultBar.css';

class ResultBar extends Component {
    render() {
        const { generateMessages, results } = this.props;
        return (
            <div className="ResultBar">
                <Navbar bg='primary' variant='dark' style={{ borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>Previous Asnwers</Navbar.Brand>
                </Navbar>
                <Messages generateMessages={generateMessages} results={results} />
            </div>
        )
    }
}
export default ResultBar;