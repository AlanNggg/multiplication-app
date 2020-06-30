import React, { Component } from 'react';
import Game from '../Game/Game';
import Cards from '../Cards/Cards';
import ResultBar from '../ResultBar/ResultBar';
import './Playground.css';

class Playground extends Component {
    static defaultProps = {
        numQuestion: 10,
        startCount: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            // current question no.
            currentNum: 1,
            // ALL questions, answers & answers the student gave
            questions: [],
            correctAnswers: [],
            hiddenAnswers: [],
            studentAnswers: [],
            results: [],
            // EACH questions & answers
            type: 0,
            question: [],
            answer: [],
            hiddenAnswer: 0,
            studentAnswer: [],
            correct: false
        }
        this.hideAnswer = this.hideAnswer.bind(this);
        this.inputAnswer = this.inputAnswer.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.generateMessages = this.generateMessages.bind(this);
    }
    getType() {
        return Math.floor(Math.random() * 2) + 1;
    }
    getQuestion(type) {
        /**
         * type 1: question: ? * ? = 100
         */
        // const { type } = this.state;
        const question = [];
        if (type === 1) {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            question.push(num1, num2);
        } else {
            const num1 = Math.floor(Math.random() * 100) + 1;
            question.push(num1);
        }
        return question;
    }
    getAnswer(question) {
        let answer = [];
        if (question.length > 1) {
            answer.push(
                question.reduce((acc, curr) => {
                    return acc * curr;
                }, 1)
            );
        } else {
            // give answer find factors
            // console.log(question);
            const factors = this.getFactor(question);
            const rand = Math.floor(Math.random() * factors.length);
            const num1 = factors[rand];
            const num2 = question / num1;
            answer.push(num1, num2);
        }
        return answer;
    }
    getFactor(question) {
        const factors = [...Array(question[0] + 1).keys()].filter(i => {
            return question[0] % i === 0
        });
        return factors;
    }
    hideAnswer(answer) {
        const randHiddenAnswer = Math.floor(Math.random() * answer.length);
        // console.log('Hidden answer ' + randHiddenAnswer);
        // console.log(answer);
        return randHiddenAnswer;
    }
    giveQuestion() {
        const type = this.getType();
        const question = this.getQuestion(type);
        const answer = this.getAnswer(question);
        const hiddenAnswer = this.hideAnswer(answer);
        this.setState(prevState => ({
            questions: [...prevState.questions, question],
            correctAnswers: [...prevState.correctAnswers, answer],
            hiddenAnswers: [...prevState.hiddenAnswers, hiddenAnswer],
            type: type,
            question: question,
            answer: answer,
            hiddenAnswer: hiddenAnswer
        }));
    }
    inputAnswer(evt) {
        const { currentNum } = this.state;
        const { numQuestion } = this.props;
        if (currentNum <= numQuestion) {
            const givenAnswer = evt.target.id;
            console.log(evt);
            // console.log('hello');
            this.setState(prevState => ({ studentAnswer: [...prevState.studentAnswer, givenAnswer] }));
        }
    }
    checkAnswer(studentAnswer) {
        const { question, answer, hiddenAnswer } = this.state;

        console.log('Playground 124: ' + answer, studentAnswer);
        if (answer.length > 1 && studentAnswer != null) {
            const modifiedAnswer = answer.map(value => `${value}`.split(''))[hiddenAnswer];
            // console.log(modifiedAnswer);
            if (studentAnswer.length === modifiedAnswer.length) {
                const result = modifiedAnswer.every((value, index) => {
                    // console.log(value);
                    console.log('check: ' + value + " " + studentAnswer[index]);
                    return value === studentAnswer[index];
                });
                console.log(result);
                const modifiedStudentAnswer = parseInt(studentAnswer.join(''));
                this.setState(prevState => ({
                    currentNum: prevState.currentNum + 1,
                    studentAnswers: [...prevState.studentAnswers, modifiedStudentAnswer],
                    results: [...prevState.results, result],
                    studentAnswer: [],
                    correct: result
                }));
                this.giveQuestion();
            }
        } else if (answer.length === 1 && studentAnswer != null) {
            const modifiedAnswer = `${answer[0]}`.split('');
            if (studentAnswer.length === modifiedAnswer.length) {
                const result = modifiedAnswer.every((value, index) => {
                    console.log('check: ' + value + " " + studentAnswer[index]);
                    return value === studentAnswer[index];
                });
                console.log(result);
                const modifiedStudentAnswer = parseInt(studentAnswer.join(''));
                this.setState(prevState => ({
                    currentNum: prevState.currentNum + 1,
                    studentAnswers: [...prevState.studentAnswers, modifiedStudentAnswer],
                    results: [...prevState.results, result],
                    studentAnswer: [],
                    correct: result
                }));
                this.giveQuestion();
                // console.log(modifiedAnswer);
            }
        } else {
            this.setState(prevState => ({
                currentNum: prevState.currentNum + 1,
                studentAnswers: [...prevState.studentAnswers, 'No'],
                results: [...prevState.results, false],
                studentAnswer: [],
                correct: false
            }));
            this.giveQuestion();
        }
    }

    generateMessages() {
        const { questions, correctAnswers, hiddenAnswers, studentAnswers, results } = this.state;
        let messages = questions.map((question, index) => {
            if (studentAnswers[index] != null) {
                let message;
                console.log('Message: ' + studentAnswers);
                if (question.length > 1) {
                    message = question.reduce((prev, curr) => `Question: ${prev} * ${curr} = ?\n`);
                    message += `Answer: ${correctAnswers[index].join('')}\nYour Answer: ${studentAnswers[index]}`
                    console.log(message);
                } else {
                    const hiddenAnswer = hiddenAnswers[index];
                    const givenAnswer = +!hiddenAnswer;
                    console.log(correctAnswers[index] + ' : ' + correctAnswers[index][hiddenAnswer]);
                    message = `Question: ${question} = ${correctAnswers[index][givenAnswer]} * ?\n`;
                    message += `Answer: ${correctAnswers[index][hiddenAnswer]}\nYour Answer: ${studentAnswers[index]}`
                    console.log(message);
                }
                message = message.split('\n').map((line, i) => {
                    return <span key={`message-${index}-line-${i}`}>{line}<br /></span>;
                });
                return message;
            }
        });
        // console.log(messages);
        return messages;
    }

    render() {
        const { startCount, numQuestion } = this.props;
        const { currentNum } = this.state;
        const { type, question, answer, hiddenAnswer, studentAnswer, results } = this.state;
        console.log('Playground 206 Num: ' + currentNum);

        return (
            <div className='Content'>
                <div className='Playground'>
                    <Game
                        type={type}
                        question={question}
                        answer={answer}
                        hiddenAnswer={hiddenAnswer}
                        studentAnswer={studentAnswer}
                        startCount={startCount}
                        currentNum={currentNum}
                        numQuestion={numQuestion}
                        checkAnswer={this.checkAnswer}
                        results={results}
                    />
                    <Cards
                        answer={answer}
                        hiddenAnswer={hiddenAnswer}
                        studentAnswer={studentAnswer}
                        inputAnswer={this.inputAnswer}
                        checkAnswer={this.checkAnswer}
                    />
                </div>
                <div className='right-container'>
                    <ResultBar generateMessages={this.generateMessages} results={results} />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.giveQuestion();
    }

    componentDidUpdate() {
        const { answer, studentAnswer, hiddenAnswer, checkAnswer } = this.state;
        // console.log('Student Answer: ' + studentAnswer.length);
        // console.log('Answer: ' + answer);
        if (answer.length > 1 && studentAnswer.length > 0) {
            console.log('?: ' + answer);
            if (studentAnswer.length === `${answer[hiddenAnswer]}`.length) {
                setTimeout(() => {
                    this.checkAnswer(studentAnswer);
                }, 1000);
            }
        } else if (studentAnswer.length > 0) {
            console.log(`${answer}`.length);
            console.log('Student: ' + studentAnswer);
            if (studentAnswer.length === `${answer}`.length) {
                setTimeout(() => {
                    this.checkAnswer(studentAnswer);
                }, 1000);
            }
        }
        console.log('Answer: ' + studentAnswer);
    }
}

export default Playground;