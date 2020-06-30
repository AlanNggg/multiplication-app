import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Collapse, Form } from 'react-bootstrap';
import './Class.css';

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen(evt) {
        if (!evt.target.closest('.Class-checkbox'))
            this.setState({ open: !this.state.open });
    }

    render() {
        const { studClass, students, mode, selectParticipants } = this.props;
        const { open } = this.state;

        return (
            <div className='Class'>
                <div
                    onClick={this.setOpen}
                    aria-controls={`class-${studClass}`}
                    aria-expanded={open}
                    className='Class-title'
                >
                    {
                        mode === 0 ? studClass :
                            <Form.Check id={`class-${studClass}`} type="checkbox" label={studClass} className='Class-checkbox' onChange={selectParticipants} />
                    }
                    {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                </div>
                <Collapse in={open}>
                    <div id={`class-${studClass}`}>
                        {
                            students.map((student, index) =>
                                mode === 0 ?
                                    <NavLink
                                        exact
                                        key={`student-${studClass}-${student.name}-${student.studId}-${index}`}
                                        className='nav-link'
                                        activeClassName='active-link'
                                        className='Class-student'
                                        to={`/statistic/${studClass}/${student.studId}`}>
                                        {`${student.studId} ${student.name}`}
                                    </NavLink> :
                                    <div
                                        key={`student-${studClass}-${student.name}-${student.studId}-${index}`}
                                        id={`student-${studClass}-${student.name}-${student.studId}-${index}`}
                                        className='Class-student'
                                    >
                                        <Form.Check type="checkbox" label={`${student.studId} ${student.name}`} className='Class-checkbox' onChange={selectParticipants} />
                                    </div>
                            )
                        }
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Class;