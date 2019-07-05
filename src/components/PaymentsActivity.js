import Chart from 'chart.js';
import React from 'react';
import {connect} from 'react-redux';
import {paymentsActivity} from '../logic/chartData';

class PaymentsActivity extends React.Component{
    state = {
        ctx: undefined
    }
    drawChart = () => {
        const data = paymentsActivity(this.props.payments);
        console.log(data);
        try{
            var myChart = new Chart(this.state.ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        backgroundColor: data.colors,
                        borderColor: data.colors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                fontSize: 15,
                                labelString: 'Hour'
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                fontSize: 15,
                                labelString: 'Number of payments'
                            }
                        }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        } catch(e){

        }
        
        
    }

    componentDidMount(){
        var ctx = document.getElementById('paymentsActivity').getContext('2d');
        this.setState(() => ({ctx}))
    }
    render(){
        return(
            <div>
            
                <canvas id="paymentsActivity"></canvas>
                {this.drawChart()}
            </div>
            
        );
    }
}


const mapStateToProps = (state) =>({
    payments: state.payments
});
export default connect(mapStateToProps)(PaymentsActivity);