import React, { Component } from 'react';
import Result from '../Result/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OverallResults.css';
import emptyResult from '../image/empty_result.png';

class OverallResults extends Component {
    render() {
        const { overallResults } = this.props;

        return (
            <div className='OverallResults'>
                {
                    overallResults ?
                        overallResults.map((result, index) =>
                            <Result key={`result-${index}`} num={index} result={result} />
                        ) :
                        <img className='OverallResults-image' src={emptyResult} alt='No Student Selected' />
                }
            </div>
        )
    }
}

export default OverallResults;