import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Classes from '../Classes/Classes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClassBar.css';

class ClassBar extends Component {
    render() {
        // const { open } = this.state;
        // const { classes, students } = this.props;
        const { classList, mode } = this.props;
        return (
            <div className="ClassBar">
                <Navbar bg='primary' variant='dark' style={{ borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>Class</Navbar.Brand>
                </Navbar>
                <Classes classList={classList} mode={mode} />
            </div>
        )
    }
}

export default ClassBar;