import React, { Component } from 'react';
import Card from '../Card/Card';

import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentAnswer: [],
            click: true
        }
    }

    render() {
        const { inputAnswer } = this.props;
        // const { studentAnswer } = this.state;
        const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // console.log(studentAnswer);
        return (
            <div className='Cards'>
                {
                    allNums.map(cardNum =>
                        <Card
                            key={cardNum}
                            idNum={cardNum}
                            cardNum={cardNum}
                            inputAnswer={inputAnswer}
                        />
                    )
                }
            </div>
        )
    }
}

export default Cards;