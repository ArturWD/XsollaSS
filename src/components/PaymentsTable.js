import React from 'react';
import PaymentItem from './PaymentItem';
import { connect } from 'react-redux';
import uuid from 'uuid';
import filterPayments from '../logic/filterPayments';
import PaymentSelect from './PaymentSelect';
import PaymentInput from './PaymentInput';
import PaymentSort from './PaymentSort';
import {setFilter, setSort} from '../actions/filtersActions';

class PaymentsTable extends React.Component{
    onSortChange = (sortField) => {
        this.props.dispatch(setSort(sortField, this.props.filters.sortBy));
    }
    onSelectChange = (field, value) => {
        
        this.props.dispatch(setFilter(field, value));
    }
    render(){
        return (
            <div className="pay-table">
                <div className="thead">
                    <div className="tr">
                        <div className="th col-num"><span className="col-name">№</span></div>
                        <PaymentSelect 
                            colClass={'col-project'}
                            title={'Project Name'} 
                            options={[... new Set(this.props.payments.map(p => p.project_name) )]}
                            value={this.props.filters.project}
                            field={'project_name'}
                            onSelectChange={this.onSelectChange}
                        />
                        <PaymentInput 
                            colClass={'col-user'}
                            title={'User'} 
                            placeholder={'Search users'}
                            value={this.props.filters.user}
                            field={'user'}
                            onSelectChange={this.onSelectChange}
                            value={this.props.filters.user}
                        />
                        <PaymentSelect 
                            colClass={'col-method'}
                            title={'Payment Method'} 
                            options={[... new Set(this.props.payments.map(p => p.payment_method) )]}
                            value={this.props.filters.payment_method}
                            field={'payment_method'}
                            onSelectChange={this.onSelectChange}
                        />
                        <PaymentSort 
                            colClass={'col-amount'}
                            title={'Amount'}
                            sortBy={'amount'}
                            isActive={this.props.filters.sortBy === 'amount'}
                            onSortChange={this.onSortChange}
                        />
                        <PaymentInput 
                            colClass={'col-purchase'}
                            title={'Purchase'} 
                            placeholder={'Search purchases'}
                            value={this.props.filters.purchase}
                            field={'purchase'}
                            onSelectChange={this.onSelectChange}
                            value={this.props.filters.purchase}
                        />
                        <PaymentSort 
                            colClass={'col-date'}
                            title={'Date'}
                            sortBy={'date'}
                            isActive={this.props.filters.sortBy === 'date'}
                            onSortChange={this.onSortChange}
                        />
                        <PaymentSelect 
                            colClass={'col-status'}
                            title={'Status'} 
                            options={[... new Set(this.props.payments.map(p => p.status) )]}
                            value={this.props.filters.status}
                            field={'status'}
                            onSelectChange={this.onSelectChange}
                        />
                    </div>
                </div>
    
                <div className="tbody">
                    {this.props.visiblePayments.length == 0 ? <div className="not-found">No data found</div>
                    : this.props.visiblePayments.map((payment, index) => <PaymentItem key={uuid()} index={index} {...payment}/>)}       
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        visiblePayments: filterPayments(state.payments, state.filters),
        filters: state.filters,
        payments: state.payments
    };
};
  
export default connect(mapStateToProps)(PaymentsTable);
  