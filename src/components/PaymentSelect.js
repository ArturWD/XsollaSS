import React from 'react';

const PaymentSelect = (props) => (
    <div className={`${props.colClass} th`}>
        <h3 className="col-name">{props.title}</h3>
        <select 
            className="table-control"
            value={props.value}
            onChange={(e) =>{
                props.onSelectChange(props.field, e.target.value);
            }}
        >
            <option value="all">All</option>
            {props.options.map((o, i) => <option key={i} value={o}>{o}</option>)}
        </select>
    </div>
);

export default PaymentSelect;