import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './TimeBar.css';

class TimeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.startCount,
            // maxTimeBarWidth: 0
        }
        // this.timeBarRef = React.createRef();
    }
    changeTimeBar() {
        // const { count } = this.state;
        // const time = this.timeBarRef.current;
        // const timeStyles = window.getComputedStyle(time);
        // const timeBarWidth = timeStyles.getPropertyValue('width').replace('px', '');
        // if (timeBarWidth > 0) {
        //     const newTimeBarWidth = timeBarWidth - timeBarWidth / count;
        //     time.style.width = newTimeBarWidth + 'px';
        // }
    }
    resetTimeBar() {
        const { startCount } = this.props;
        // const { maxTimeBarWidth } = this.state;
        // console.log(maxTimeBarWidth);
        // const time = this.timeBarRef.current;
        // time.style.width = maxTimeBarWidth + 'px';
        this.setState({ count: startCount });
    }
    render() {
        const { startCount, currentNum } = this.props;
        const { count } = this.state;
        const now = count / startCount * 100;
        console.log('Num: ', currentNum);
        return (
            // <div className='TimeBar'>
            //     <div ref={this.timeBarRef} className='TimeBar-time' >
            //     </div>
            // </div>
            <ProgressBar variant="danger" now={now}></ProgressBar>
        )
    }

    componentDidMount() {
        // const { startCount } = this.props;
        // const time = this.timeBarRef.current;
        // const timeStyles = window.getComputedStyle(time);
        // const timeBarWidth = timeStyles.getPropertyValue('width').replace('px', '');
        // this.setState({ count: startCount, maxTimeBarWidth: timeBarWidth });
        this.doIntervalChange();
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000)
    }

    componentDidUpdate(prevProps) {
        const { currentNum, numQuestion, checkAnswer } = this.props;
        const { count } = this.state;
        console.log(prevProps.currentNum, currentNum);
        if (count === 0 && currentNum <= numQuestion) {
            clearInterval(this.myInterval);
            checkAnswer();
            this.resetTimeBar();
            this.doIntervalChange();
        }
        if (currentNum !== prevProps.currentNum) {
            clearInterval(this.myInterval);
            this.resetTimeBar();
            this.doIntervalChange();
        }
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }
}

export default TimeBar;