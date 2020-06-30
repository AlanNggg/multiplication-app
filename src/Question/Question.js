import React, { Component } from 'react';

class Question extends Component {
    generateQuestionCards(question) {
        let questionCards;
        if (question.length > 1) {
            questionCards = question.map((value, index) =>
                <div key={`Q-${value}-${index}`} className='question'>{value}</div>
            );
            questionCards.splice(1, 0, <div key='multiply' className='question multiply'>X</div>);
        } else {
            questionCards = <div className='question'>{question}</div>;
        }
        return questionCards;
    }
    render() {
        const { question } = this.props;
        const questionCards = this.generateQuestionCards(question);
        return (
            questionCards
        )
    }
}

export default Question;