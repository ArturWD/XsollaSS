import Chart from 'chart.js';
import React from 'react';
import {connect} from 'react-redux';
import {statusShares} from '../logic/chartData';

class StatusShares extends React.Component{
    state = {
        ctx: undefined
    }
    drawChart = () => {
        const data = statusShares(this.props.payments);
        
        try{
            var myChart = new Chart(this.state.ctx, {
                type: 'doughnut',
                responsive: true,
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
                    scales: {
                        
                    },
                    legend: {
                        display: true,
                        position: 'left'
                    }
                }
            });
        } catch(e){

        }
        
        
    }

    componentDidMount(){
        var ctx = document.getElementById('statusShares').getContext('2d');
        this.setState(() => ({ctx}))
    }
    render(){
        return(
            <div>
            
                <canvas id="statusShares"></canvas>
                {this.drawChart()}
            </div>
            
        );
    }
}


const mapStateToProps = (state) =>({
    payments: state.payments
});
export default connect(mapStateToProps)(StatusShares);