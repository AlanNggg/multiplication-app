import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { idNum, cardNum, inputAnswer, classes } = this.props;
        const className = classes ? classes : `option-${cardNum} card`;
        return (
            <div id={idNum} className={className} onClick={inputAnswer}>
                {cardNum}
            </div>
        );
    }
}

export default Card;