import React, { Component } from 'react';
import { Button, Table, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MulTable.css';

class MulTable extends Component {
    static defaultProps = {
        allNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        thColors: ['#FA6273', '#F01C21', '#FF8E19', '#FFCA00', '#BBD04D', '#89B850', '#25D3E6', '#1D9DE4', '#988FE2', '#F494C2', '#F2D9DD'],
        tdColors: ['#FD6681', '#F8BA7F', '#FFEEA9', '#F3FAC6', '#BBD86E', '#AEF6FF', '#7CD1ED', '#C7C0F6', '#F7C5DE', '#FDF3F4']
    }
    constructor(props) {
        super(props);
        this.state = {
            formula: ''
        };
        this.firstButtonRef = React.createRef();
    }
    showFormula(evt, value1, value2) {
        [...evt.target.parentNode.parentNode.parentNode.getElementsByTagName("button")].forEach(dom => {
            dom.classList.remove('btn-active');
        })
        evt.target.classList.add('btn-active');
        this.setState({ formula: `${value1} * ${value2} = ${value1 * value2}` });
    }
    render() {
        const { allNum, thColors, tdColors } = this.props;
        const { formula } = this.state;
        const cols = <thead>
            <tr>
                <th style={{ backgroundColor: thColors[0] }}>#</th>
                {
                    allNum.map((value, index) =>
                        <th style={{ textAlign: 'center', backgroundColor: thColors[index + 1] }} key={`col-${value}`}>{value}</th>
                    )
                }
            </tr>
        </thead>
        const rows = <tbody>
            {
                allNum.map((value1, index1) => {
                    return (
                        <tr key={`row-${value1}`}>
                            <th style={{ textAlign: 'center', backgroundColor: thColors[index1 + 1] }} > {value1}</th>
                            {
                                allNum.map((value2, index2) => {
                                    const bgColor = value2 <= value1 ? tdColors[index1] : tdColors[index2];
                                    return (
                                        <td key={`row-${value1 * value2}`} style={{ backgroundColor: bgColor }}>
                                            <Button
                                                variant="outline-dark"
                                                className='MulTable-btn'
                                                ref={value1 === 1 && value2 === 1 ? this.firstButtonRef : ''}
                                                onClick={(evt) => { this.showFormula(evt, value1, value2) }}
                                            >
                                                {value1 * value2}
                                            </Button>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
        return (
            <div className='MulTable'>
                <Navbar bg='primary' variant='dark' style={{ width: '100%', borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>Multiplication Table</Navbar.Brand>
                    <div className='Multable-formula'>Formula : <span>{formula}</span></div>
                </Navbar>
                <Table className='MulTable-table ' striped borderless hover responsive>
                    {cols}
                    {rows}
                </Table>
            </div>

        )
    }

    componentDidMount() {
        this.firstButtonRef.current.click();
    }
}

export default MulTable;