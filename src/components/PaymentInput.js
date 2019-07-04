import React from 'react';

const PaymentInput = (props) => (
    <div className={`${props.colClass} th`}>
        <h3 className="col-name">{props.title}</h3>
        <input
            className="table-control"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>{
                props.onSelectChange(props.field, e.target.value);
            }}
        />
    </div>
);

export default PaymentInput;