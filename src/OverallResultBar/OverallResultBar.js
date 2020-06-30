import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import OverallResults from '../OverallResults/OverallResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OverallResultBar.css';

class OverallResultBar extends Component {
    render() {
        const { profile } = this.props;
        const name = profile ? profile.name : null;
        const overallResults = profile ? profile.overallResults : null;

        return (
            <div className='OverallResultBar'>
                <Navbar bg='primary' variant='dark' style={{ borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>{name ? `${name}'s` : ''} Overall Results</Navbar.Brand>
                </Navbar>
                <OverallResults overallResults={overallResults} />
            </div>
        );
    }
}

export default OverallResultBar;