import React from 'react';

const PaymentSort = (props) => (
    <div className={`${props.colClass} th`}>
        <h3 className="col-name">{props.title}</h3>
        <button 
            className={props.isActive ? "btn-sort btn-sort--active": "btn-sort"}
            onClick={() =>{
                props.onSortChange(props.sortBy);
            }}
        >Sort</button>
    </div>
);

export default PaymentSort;