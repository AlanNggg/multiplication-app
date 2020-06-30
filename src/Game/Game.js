import React, { Component } from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import TimeBar from '../TimeBar/TimeBar';
import './Game.css';
import congratulation from '../image/congratulation.png';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, question, answer, hiddenAnswer, studentAnswer, startCount, currentNum, numQuestion, checkAnswer, results } = this.props;
        // console.log(changeQuestion);
        return (
            <div className='Game'>
                {
                    currentNum <= numQuestion ? (
                        <React.Fragment>
                            <Question type={type} question={question} />
                            <Answer type={type} answer={answer} hiddenAnswer={hiddenAnswer} studentAnswer={studentAnswer} />
                            {
                                startCount > 0 ?
                                    <TimeBar
                                        startCount={startCount}
                                        currentNum={currentNum}
                                        numQuestion={numQuestion}
                                        checkAnswer={checkAnswer}
                                    /> : ''
                            }
                        </React.Fragment>
                    ) :
                        <React.Fragment>
                            <img className='Game-image' src={congratulation} alt='Congratulation! You have finished all the questions' />
                            <div className='Game-score'>You have finished all questions <br />{`Your Score ${results.reduce((total, result) => {
                                return result ? total + 1 : total;
                            }, 0)} / ${results.length}`}</div>
                        </React.Fragment>

                }
            </div>
        )
    }
}

export default Game;