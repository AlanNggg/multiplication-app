import React, { Component } from 'react';
import ClassBar from '../ClassBar/ClassBar';
import Profile from '../Profile/Profile';
import OverallResultBar from '../OverallResultBar/OverallResultBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Statistic.css';

class Statistic extends Component {
    static defaultProps = {
        mode: 0
    }
    render() {
        const { classList, profile, mode, student } = this.props;

        return (
            <div className='Statistic'>
                {student ? '' : <ClassBar classList={classList} mode={mode} />}
                <Profile profile={profile} />
                <OverallResultBar profile={profile} />;
            </div>
        );
    }
}

export default Statistic;