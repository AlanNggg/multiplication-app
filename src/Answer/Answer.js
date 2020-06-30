import React, { Component, Fragment } from 'react';
import Card from '../Card/Card';

import './Answer.css';

class Answer extends Component {

    generateAnswerCards() {
        const { answer, hiddenAnswer, studentAnswer } = this.props;
        // console.log('Answer 10: ' + studentAnswer);
        let answerCards;
        if (answer.length > 1) {
            console.log(answer);
            answerCards = answer.map((value1, index1) => {
                const hidden = index1 === hiddenAnswer ? 'not-filled' : 'filled';
                const answerChard = `${value1}`.split('').map((value2, index2) => {
                    const idNum = `A-${value1}-${index1}-${index2}`;
                    let cardNum = index1 === hiddenAnswer ? '?' : value2;
                    if (studentAnswer.length > 0 && index1 === hiddenAnswer) {
                        if (studentAnswer[index2]) {
                            return (
                                <Card
                                    key={idNum}
                                    idNum={idNum}
                                    cardNum={studentAnswer[index2]}
                                    classes={`Answer-card filled`}
                                />
                            )
                        }
                    }
                    return (
                        <Card
                            key={idNum}
                            idNum={idNum}
                            cardNum={cardNum}
                            classes={`Answer-card ${hidden}`}
                        />
                    )
                });
                return answerChard;
            });
            answerCards.splice(1, 0, <div key='multiply' className='multiply'>X</div>);
        } else {
            answerCards = `${answer[0]}`.split('').map((value, index) => {
                const idNum = `A-${value}-${index}-0`;
                if (studentAnswer.length > 0) {
                    if (studentAnswer[index]) {
                        return (
                            <Card
                                key={idNum}
                                idNum={idNum}
                                cardNum={studentAnswer[index]}
                                classes={`Answer-card filled`}
                            />
                        )
                    }
                }
                return (
                    <Card
                        key={idNum}
                        idNum={idNum}
                        cardNum='?'
                        classes='Answer-card not-filled'
                    />
                )
            });
        }

        return answerCards;
    }

    render() {
        const { studentAnswer, hiddenAnswer } = this.props;
        // console.log('Student Answer: ' + studentAnswer);
        let answerCards = this.generateAnswerCards();
        return (
            <div className='Answer'>
                {answerCards}
            </div>
        );
    }
}

export default Answer;