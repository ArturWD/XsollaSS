import React from 'react';
import {connect} from 'react-redux';
import formatPayment from '../logic/formatPayments';
import {setPayments} from '../actions/paymentsActions';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

class XsollaPaymentsApp extends React.Component{
    componentDidMount(){
        const url = 'https://gist.githubusercontent.com/ArturWD/f4ca358315c48e83a851328ca02f273a/raw/8d45e0f5b60b9dd6a5da1f0c957f3a22031fe102/data.json';

        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            const payments = Array.from(json).map(formatPayment);
            this.props.dispatch(setPayments(payments));
        })
        .catch(error => {
            //alert(error);
            alert("Ooops! Failed to fetch payments. Try to reload the page.");
        }); 
    }

    render (){
        return(
            <div className="app">
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
            
        )
    };
}


export default connect()(XsollaPaymentsApp);