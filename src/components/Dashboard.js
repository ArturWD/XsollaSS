import React from 'react';
import PaymentsTable from './PaymentsTable';
import RateByUsage from './RateByUsage';
import RateBySpending from './RateBySpending';
import ProjectShares from './ProjectShares';
import StatusShares from './StatusesShares';
import PaymentsActivity  from './PaymentsActivity';


const Dashboard = () => (
    <main>
        <div className="container">
            <h2 className="section-name">Recent payments</h2>
            <PaymentsTable/>

            <div className="charts-grid">
                <div className="chart-cell">
                    <h2 className="section-name">Payment methods rated by usage</h2>
                    <RateByUsage/>
                </div>
                <div className="chart-cell">
                    <h2 className="section-name">Payment methods rated by expenditure</h2>
                    <RateBySpending/>
                </div>
            </div>

            <div className="charts-grid">
                <div className="chart-cell project-shares">
                    <h2 className="section-name">Shares of projects</h2>
                    <ProjectShares/>
                </div>
                <div className="chart-cell">
                    <h2 className="section-name">Shares of transaction statuses</h2>
                    <StatusShares/>
                </div>
            </div>

            <h2 className="section-name">Payments activity during the day</h2>
            <PaymentsActivity/>
        </div>      
    </main>
);

export default Dashboard;