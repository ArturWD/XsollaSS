import Chart from 'chart.js';
import React from 'react';
import {connect} from 'react-redux';
import {projectShares} from '../logic/chartData';

class ProjectShares extends React.Component{
    state = {
        ctx: undefined
    }
    drawChart = () => {
        const data = projectShares(this.props.payments);
        
        try{
            var myChart = new Chart(this.state.ctx, {
                type: 'doughnut',
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
        var ctx = document.getElementById('projectShares').getContext('2d');
        this.setState(() => ({ctx}))
    }
    render(){
        return(
            <div>
            
                <canvas id="projectShares"></canvas>
                {this.drawChart()}
            </div>
            
        );
    }
}


const mapStateToProps = (state) =>({
    payments: state.payments
});
export default connect(mapStateToProps)(ProjectShares);