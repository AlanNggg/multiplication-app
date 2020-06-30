import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: props.overallResults.map((result, index) => `Game ${index}`),
                datasets: [
                    {
                        label: 'Correct Rate (%)',
                        fill: false,
                        lineTension: 0.1,
                        // Line fill color
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        // Line stroke color
                        borderColor: 'rgba(75,192,192,1)',
                        // Line cap style
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        // Line join style : default miter
                        borderJoinStyle: 'miter',
                        // The border color for points
                        pointBorderColor: 'rgba(75,192,192,1)',
                        // The fill color for points
                        pointBackgroundColor: '#fff',
                        // The width of the point border in pixels
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: props.overallResults.map((result, index) => Math.floor(result.numCorrect / result.numQuestion * 100))
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayName: ''
    }

    render() {
        const { data } = this.state;
        console.log(data.datasets[0].data);
        return (
            <div className='Chart'>
                <h3>Correct Rate</h3>
                <Line data={data} />
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.overallResults !== this.props.overallResults) {
            const { overallResults } = this.props;
            this.setState(prevState => {
                prevState.data.datasets[0].data = overallResults.map((result, index) => Math.floor(result.numCorrect / result.numQuestion * 100));
                prevState.data.labels = overallResults.map((result, index) => `Game ${index}`);
                return { data: prevState.data };
            });
        }
    }

};

export default Chart;