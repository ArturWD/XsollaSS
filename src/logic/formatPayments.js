import moment from 'moment';


const formatPayment = ({transaction, user, payment_details, purchase}) => { 
    
    const {virtual_items, virtual_currency} = purchase;
    const purchase_item = virtual_items || ( virtual_currency.amount !==0 ? `${virtual_currency.amount} ${virtual_currency.name}`: false )|| 'Other';
    return {
        project_name: transaction.project.name,
        payment_method: transaction.payment_method.name,
        date: moment.parseZone(transaction.transfer_date),
        status: transaction.status,
        user: user.email || user.name || user.id,
        payment_amount: payment_details.payment.amount,
        purchase_item,
        currency: payment_details.payment.currency
    };
};





export default formatPayment;