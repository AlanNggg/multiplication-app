import React, { Component } from 'react';
import ClassBar from '../ClassBar/ClassBar';
import Profile from '../Profile/Profile';
import OverallResultBar from '../OverallResultBar/OverallResultBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatisticParent.css';

class StatisticParent extends Component {
    static defaultProps = {
        mode: 0
    }
    render() {
        let { student } = this.props;
        let profile = student.student;
        profile.studClass = student.studClass;

        return (
            <div className='StatisticParent'>
                <Profile profile={profile} />
                <OverallResultBar profile={profile} />;
            </div>
        );
    }
}

export default StatisticParent;