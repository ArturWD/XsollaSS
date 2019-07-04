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


const colors = ['rgba(255, 0, 91, .7)', 
                'rgba(0, 118, 255, .7)', 
                'rgba(73, 92, 107, .7)', 
                'rgba(255, 235, 59, .7)', 
                'rgba(139, 195, 74, .7)', 
                'rgba(63, 81, 181, .7)', 
                'rgba(103, 58, 183, .7)', 
                'rgba(76, 175, 80, .7)',
                'rgba(103,58,183, .7)',
                'rgba(255,235,59, .7)',
                'rgba(38,198,218, .7)',
                'rgba(240,98,146, .7)',
                'rgba(255,87,34, .7)',
                'rgba(13,71,161, .7)'
            ];

const sortData = (a, b) => {
    if(a.value < b.value) return 1;
    else return -1;
}

const destructureData = (data) =>{
    return {
        labels: data.map(d => d.label),
        values: data.map(d => d.value),
        colors: data.map(d => d.color)
    };
}


export const rateBySpending = (payments) => {
    const unusedColors = [...colors];
    const paymentMethods = [... new Set(payments.map(p => p.payment_method) )];
    const data = paymentMethods.map(method => {
        const moneySpent = payments.filter(p => p.payment_method == method)
                                    .reduce((total, payment) => {
                                        return total + fx(payment.payment_amount).from(payment.currency).to("USD");
                                    }, 0);
        const index = Math.floor(Math.random() * unusedColors.length);
        const color = unusedColors.splice(index, 1)[0];

        return {
            value: moneySpent,
            label: method,
            color

        };
    });
    data.sort(sortData);

    return destructureData(data);
} 

export const rateByUsage = (payments) => {
    const unusedColors = [...colors];
    const paymentMethods = [... new Set(payments.map(p => p.payment_method) )];
    const data = paymentMethods.map(method => {
        const numberUsed = payments.filter(p => p.payment_method == method).length;
        const index = Math.floor(Math.random() * unusedColors.length);
        const color = unusedColors.splice(index, 1)[0];

        return {
            value: numberUsed,
            label: method,
            color

        };
    });
    data.sort(sortData);

    return destructureData(data);
} 

export const projectShares = (payments) => {
    const unusedColors = [...colors];
    const projects = [... new Set(payments.map(p => p.project_name) )];
    const data = projects.map(project => {
        const numberUsed = payments.filter(p => p.project_name == project).length;
        const index = Math.floor(Math.random() * unusedColors.length);
        const color = unusedColors.splice(index, 1)[0];

        return {
            value: numberUsed,
            label: project,
            color

        };
    });
    data.sort(sortData);

    return destructureData(data);
}

export const statusShares = (payments) => {
    const unusedColors = [...colors];
    const statuses = [... new Set(payments.map(p => p.status) )];
    const data = statuses.map(status => {
        const numberUsed = payments.filter(p => p.status == status).length;
        const index = Math.floor(Math.random() * unusedColors.length);
        const color = unusedColors.splice(index, 1)[0];

        return {
            value: numberUsed,
            label: status,
            color

        };
    });
    data.sort(sortData);

    return destructureData(data);
}




export const paymentsActivity = (payments) => {
    const data = [];
    for(let i = 0; i<24; i++){
        data.push({
            value: payments.filter(p => p.date.format('H') == i).length,
            label: i+1,
            color: 'rgba(255, 0, 91, .7)'
        });
    }

    return destructureData(data);
}