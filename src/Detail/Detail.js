import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Info from '../Info/Info';
import './Detail.css';
import emptyResult from '../image/empty_result.png';

class Detail extends Component {
    render() {
        const { profile } = this.props;
        const overallResults = profile ? profile.overallResults : null;

        return (
            profile ?
                <div className='Detail'>
                    <Chart overallResults={overallResults} />
                    <Info profile={profile} />
                </div> :
                <img className='Profile-image' src={emptyResult} alt='No Student Selected' />
        );
    }
}

export default Detail;