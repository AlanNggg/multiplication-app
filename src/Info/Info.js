import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    render() {
        const { name, studClass, studId, gender, tel } = this.props.profile;
        return (
            <div className='Info'>
                <h3>Student Info</h3>
                <div className='Info-detail'>
                    <h5 className='Info-title'>Student Name :</h5><div className='Info-content'>{name}</div>
                </div>
                <div className='Info-detail'>
                    <h5 className='Info-title'>Student Class :</h5><div className='Info-content'>{studClass}</div>
                </div>
                <div className='Info-detail'>
                    <h5 className='Info-title'>Student Id :</h5><div className='Info-content'>{studId}</div>
                </div>
                <div className='Info-detail'>
                    <h5 className='Info-title'>Gender :</h5><div className='Info-content'>{gender}</div>
                </div>
                <div className='Info-detail'>
                    <h5 className='Info-title'>Tel :</h5><div className='Info-content'>{tel}</div>
                </div>
            </div>
        );
    }
}

export default Info;