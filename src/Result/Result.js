import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import './Result.css';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.setOpen = this.setOpen.bind(this);
    }
    setOpen() {
        this.setState({ open: !this.state.open });
    }
    render() {
        const { num, result } = this.props;
        const { open } = this.state;
        const details = result.details.map(detail => detail.split('\n').map((line, i) => {
            return <span key={`detail-${i}`}>{line}<br /></span>;
        }));
        return (
            <div className='Result'>
                <div
                    onClick={this.setOpen}
                    aria-controls={`Result-${num}`}
                    aria-expanded={open}
                    className='Result-title'
                >
                    {`Game  ${num} : Score ${result.numCorrect} / ${result.numQuestion}`}
                    {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                </div>
                <Collapse in={open}>
                    <div id={`Result-${num}`}>
                        {

                            <div>
                                {
                                    details.map((detail, index) =>
                                        <div key={`result-${num}-detail-${index}`} className='Result-content' style={{ color: result.results[index] ? 'green' : 'red' }}>
                                            <div>{detail}</div>
                                        </div>
                                    )
                                }
                            </div>

                        }
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Result;