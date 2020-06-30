import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Collapse, Form } from 'react-bootstrap';
import './CreatedGame.css';

class CreatedGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openParticipants: false
        }
        this.setOpen = this.setOpen.bind(this);
        this.setOpenParticipants = this.setOpenParticipants.bind(this);
    }

    setOpen(evt) {
        this.setState({ open: !this.state.open });
    }

    setOpenParticipants(evt) {

        this.setState({ openParticipants: !this.state.openParticipants });
    }

    render() {
        const { game } = this.props;
        const { open, openParticipants } = this.state;
        const type = ['factor/multiply', 'multiply', 'factor'];

        return (
            game !== null ?
                <div className='CreatedGame'>
                    <div
                        onClick={this.setOpen}
                        aria-controls={`game-${game.id}-${game.title}`}
                        aria-expanded={open}
                        className='Game-title'
                    >
                        {game.title}
                        {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                    </div>
                    <Collapse in={open}>

                        <div id={`game-${game.id}-${game.title}`} className='Game-content'>
                            <span className='Game-Info'>ID: <span className='Game-data'>{game.id}</span></span>
                            <span className='Game-Info'>Title: <span className='Game-data'>{game.title}</span></span>
                            <span className='Game-Info'>No. of Question: <span className='Game-data'>{game.numQuestion}</span></span>
                            <span className='Game-Info'>Game Type: <span className='Game-data'>{type[game.type]}</span></span>
                            <span className='Game-Info'>Time Limited: <span className='Game-data'>{`${game.timeLimit}`}</span></span>
                            <span className='Game-Info'>Time per Question: <span className='Game-data'>{game.timePerQuestion}s</span></span>
                            <div
                                onClick={this.setOpenParticipants}
                                aria-controls={`game-${game.id}-${game.title}-participants`}
                                aria-expanded={openParticipants}
                                className='Game-title'
                            >
                                participants
                                {openParticipants ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                            </div>
                            <Collapse in={openParticipants}>
                                <div id={`game-${game.id}-${game.title}-participants`} className='Game-participants'>
                                    {
                                        game.participants.map((participant, index) => {
                                            console.log(participant);
                                            // 0: student, 1: 1A (class), 2: Alan (name), 3: 1 (studId), 4: index (for uniquify only)
                                            const modifiedParticipant = participant.split('-');
                                            return (
                                                <div
                                                    key={`game-${game.id}-${game.title}-${participant}`}
                                                    id={`game-${game.id}-${game.title}-${participant}`}
                                                    className='Game-participant'
                                                >
                                                    <span className='Game-Info'>Class: <span className='Game-data'>{modifiedParticipant[1]}</span></span>
                                                    <span className='Game-Info'>Name: <span className='Game-data'>{modifiedParticipant[2]}</span></span>
                                                    <span className='Game-Info'>Student ID: <span className='Game-data'>{modifiedParticipant[3]}</span></span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Collapse>
                        </div>
                    </Collapse>
                </div> : ''

        )
    }
}

export default CreatedGame;