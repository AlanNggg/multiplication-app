import React, { Component } from 'react';
import { Navbar, Alert, Fade, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Classes from '../Classes/Classes';
import CreatedGames from '../CreatedGames/CreatedGames';
import './SettingDetail.css';

class SettingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            numQuestion: 0,
            // type 0 = factor/multiply, 1 = multiply, 2 = factor
            type: 0,
            timeLimit: false,
            timePerQuestion: 0,
            participants: [],
            error: false,
            success: false
        }
        this.selectParticipants = this.selectParticipants.bind(this);
        this.setTimeLimit = this.setTimeLimit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createGame = this.createGame.bind(this);
        this.setShowError = this.setShowError.bind(this);
        this.setShowSuccess = this.setShowSuccess.bind(this);
    }
    selectParticipants(evt) {
        console.log(this.state.participants);
        if (evt.target.id.includes('class')) {
            const allStudents = evt.target.parentNode.parentNode.nextSibling.childNodes;
            allStudents.forEach(student => {
                const studentCheckBox = student.childNodes[0].childNodes[0]
                studentCheckBox.checked = evt.target.checked;
                if (studentCheckBox.checked) {
                    this.setState(prevState => {
                        if (!prevState.participants.includes(student.id))
                            return { participants: [...prevState.participants, student.id] }
                        else
                            return { participants: prevState.participants }
                    });
                } else {
                    this.setState(prevState => {
                        const removedParticipants = prevState.participants.indexOf(student.id);
                        prevState.participants.splice(removedParticipants, 1);
                        return { participants: [...prevState.participants] }
                    });
                }
            })
        } else {
            console.log(evt.target.parentNode.parentNode.id);
            const student = evt.target.parentNode.parentNode;
            const studentCheckBox = student.childNodes[0].childNodes[0];
            if (studentCheckBox.checked) {
                this.setState(prevState => {
                    if (!prevState.participants.includes(student.id))
                        return { participants: [...prevState.participants, student.id] }
                    else
                        return { participants: prevState.participants }
                });
            } else {
                this.setState(prevState => {
                    const removedParticipants = prevState.participants.indexOf(student.id);
                    prevState.participants.splice(removedParticipants, 1);
                    return { participants: [...prevState.participants] }
                });
            }
            const numStudentChecked = [...evt.target.parentNode.parentNode.parentNode.childNodes].reduce((num, student) => {
                console.log(student);
                return student.childNodes[0].childNodes[0].checked ? num + 1 : num;
            }, 0);
            const classesCheckBox = student.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0];
            classesCheckBox.checked = numStudentChecked ? true : false;
        }
    }
    setTimeLimit() {
        this.setState(prevState => {
            return { timeLimit: !prevState.timeLimit }
        });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    setShowError(error) {
        this.setState({ error: error });
    }
    setShowSuccess(success) {
        this.setState({ success: success });
    }

    createGame() {
        const { title, numQuestion, timeLimit, timePerQuestion, participants } = this.state;
        if (title === null) {
            this.setState({ error: true });
        } else if (numQuestion <= 0 || numQuestion === null) {
            this.setState({ error: true });
        } else if (timeLimit && timePerQuestion <= 0) {
            this.setState({ error: true });
        } else if (participants.length <= 0) {
            this.setState({ error: true });
        } else {
            this.setState({ error: false, success: true });
        }
        // setTimeout(() => {
        //     this.setState({ error: false });
        // }, 2000);
    }
    getError() {
        const { title, numQuestion, timeLimit, timePerQuestion, participants } = this.state;
        console.log(title, numQuestion, timeLimit, timePerQuestion, participants);
        let errors = [];
        if (title.length === 0) {
            const error = 'Game Title is required.';
            errors.push(error);
        }
        if (numQuestion <= 0 || numQuestion === null) {
            const error = 'Number of Question is less than 0.';
            errors.push(error);
        }
        if (timeLimit && timePerQuestion <= 0) {
            const error = 'Time Per Question (sec) is required.';
            errors.push(error);
        }
        if (participants.length <= 0) {
            const error = 'Please select participants.';
            errors.push(error);
        }
        if (title.length > 0 && numQuestion > 0 && participants.length > 0 && (timeLimit && timePerQuestion > 0 || !timeLimit)) {
            this.setState({ error: false });
        }
        const errorList = (
            <React.Fragment>
                {
                    errors.map((error, index) =>
                        <span className='SettingDetail-alert' key={`error-${index}`}>{error}<br /></span>
                    )
                }
            </React.Fragment>
        )
        return errorList;
    }
    getSuccess() {
        const { title, numQuestion, timeLimit, timePerQuestion, participants } = this.state;

        const succesInfo = (
            <React.Fragment>

                <div className='SettingDetail-alert'>Title: <span className='SettingDetail-successInfo'>{title}</span><br /></div>
                <div className='SettingDetail-alert'>No. of Question: <span className='SettingDetail-successInfo'>{numQuestion}</span><br /></div>
                <div className='SettingDetail-alert'>Time Limited: <span className='SettingDetail-successInfo'>{`${timeLimit}`}</span><br /></div>
                <div className='SettingDetail-alert'>Time Per Question: <span className='SettingDetail-successInfo'>{timePerQuestion}</span><br /></div>
                <div className='SettingDetail-alert'>No. of Participants: <span className='SettingDetail-successInfo'>{participants.length}</span><br /></div>
            </React.Fragment>
        )
        return succesInfo;
    }

    render() {
        const { classList, gameList } = this.props;
        const { title, numQuestion, type, timeLimit, timePerQuestion, error, success } = this.state;
        console.log('Current participants: ', this.state.participants);
        return (
            <div className='SettingDetail'>
                <Navbar bg='primary' variant='dark' style={{ borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>Create Game</Navbar.Brand>
                </Navbar>
                <div className='SettingDetail-participants'>
                    <h3>Participants</h3>
                    <Classes classList={classList} selectParticipants={this.selectParticipants} />
                </div>
                <div className='SettingDetail-gameList'>
                    <h3>Game List</h3>
                    <CreatedGames gameList={gameList} />
                </div>


                <Fade in={error}>
                    <div id='fade-alert'>
                        {
                            error ?
                                <Alert variant="danger" onClose={() => this.setShowError(!error)} dismissible>
                                    <Alert.Heading>Fail to create new game</Alert.Heading>
                                    <p>
                                        {this.getError()}
                                    </p>
                                </Alert> : ''
                        }
                    </div>
                </Fade>

                <Fade in={success}>
                    <div id='fade-alert'>
                        {
                            success ?
                                <Alert variant="success" onClose={() => this.setShowSuccess(!success)} dismissible>
                                    <Alert.Heading>Create new Game Successfully</Alert.Heading>
                                    <p>
                                        {this.getSuccess()}
                                    </p>
                                </Alert> : ''
                        }
                    </div>
                </Fade>


                <div className='SettingDetail-setting'>
                    <h3>Game Setting
                        <Button
                            className='SettingDetail-btnNewGame'
                            variant='primary'
                            size='sm'
                            onClick={this.createGame}
                            aria-controls="fade-alert"
                        >
                            <i className="fas fa-plus" style={{ paddingRight: '.5rem' }}></i>Create Game
                        </Button>
                    </h3>
                    <div className='SettingDetail-detail'>
                        <h5 className='SettingDetail-title'>Game Title :</h5>
                        <Form.Control
                            className='SettingDetail-input'
                            name='title'
                            type='text'
                            size='sm'
                            value={title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='SettingDetail-detail'>
                        <h5 className='SettingDetail-title'>Question Number :</h5>
                        <Form.Control
                            className='SettingDetail-input'
                            name='numQuestion'
                            type='number'
                            size='sm'
                            value={numQuestion}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='SettingDetail-detail'>
                        <h5 className='SettingDetail-title'>Question Type :</h5>
                        <Form.Control className='SettingDetail-input' name='type' as='select' size='sm' value={type} onChange={this.handleChange}>
                            <option value='0'>factor/multiply</option>
                            <option value='1'>multiply</option>
                            <option value='2'>factor</option>
                        </Form.Control>
                    </div>
                    <div className='SettingDetail-detail'>
                        <h5 className='SettingDetail-title'>Time Limit :</h5>
                        <BootstrapSwitchButton checked={false} width={120} size='sm' checked={timeLimit} onChange={this.setTimeLimit} />
                    </div>
                    <div className='SettingDetail-detail'>
                        <h5 className='SettingDetail-title'>Time per Question (sec) :</h5>
                        <Form.Control
                            className='SettingDetail-input'
                            name='timePerQuestion'
                            type='number'
                            size="sm"
                            required={timeLimit} disabled={!timeLimit}
                            value={timePerQuestion}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div >
        );
    }
}

export default SettingDetail;