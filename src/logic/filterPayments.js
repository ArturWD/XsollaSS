import fx from 'money';
import moment from 'moment';

fx.base = "USD";
fx.rates = {
	"BRL" : 3.85, 
	"RUB" : 63.30, 
    "EUR" : 0.89,
    "JPY" : 108.19,
    "THB" : 30.64,
    "MGO" : 16.82,
	"USD" : 1 
};




export default (payments, filters) => {
    const filteredPayments = payments.filter(p => {
        if( (p.project_name == filters.project_name || filters.project_name == 'all') &&
            (p.user.toLowerCase().includes(filters.user.toLowerCase())) &&
            (p.payment_method == filters.payment_method || filters.payment_method =='all') &&
            (p.purchase_item.toLowerCase().includes(filters.purchase.toLowerCase())) &&
            (p.status == filters.status || filters.status == 'all') 
        ) {
            return true;
        }
    });

    if(filters.sortBy == 'amount'){
        return filteredPayments.sort((prev, curr) =>{
            if(fx(prev.payment_amount).from(prev.currency).to("USD") < fx(curr.payment_amount).from(curr.currency).to("USD")) return 1;
            else return -1;
        });
    } else if(filters.sortBy == 'date'){
        console.log('sorting by date');
        return filteredPayments.sort((prev, curr) =>{
            if(prev.date.isBefore(curr.date)) return 1;
            else return -1;
        });
    } else{
        return filteredPayments;
    }
};