import moment from 'moment';
import React from 'react';
import numeral from 'numeral';

const PaymentItem = (props) => (
    <div className="tr">
        <div className="td col-num">{props.index+1}</div>
        <div className="td col-project">{props.project_name}</div>
        <div className="td col-user">{props.user}</div>
        <div className="td col-method">{props.payment_method}</div>
        <div className="amount td col-amount">{`${numeral(props.payment_amount).format('0,0.00')} ${props.currency}`}</div>
        <div className="td col-purchase">{props.purchase_item}</div>
        <div className="date td col-date">{moment(props.date).format('DD.MM.YY')}<span> {moment(props.date).format('HH:MM')}</span> </div>
        <div className="status td col-status" data-hint={props.status}>
            {props.status == 'created' && <div className="status-created"></div>}
            {props.status == 'done' && <div className="status-done"></div>}
            {props.status == 'canceled' && <div className="status-canceled"></div>}
        </div>
    </div>
);

export default PaymentItem;