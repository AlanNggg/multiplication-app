import React, { Component } from 'react';
import Class from '../Class/Class';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Classes.css';

class Classes extends Component {
    render() {
        const { classList, mode, selectParticipants } = this.props;

        return (
            <div className='Classes'>
                {
                    classList.map((classDetail) =>
                        <Class
                            key={`class-${classDetail.studClass}`}
                            studClass={classDetail.studClass}
                            students={classDetail.students} mode={mode}
                            selectParticipants={selectParticipants}
                        />
                    )
                }
            </div>
        )
    }
}

export default Classes;