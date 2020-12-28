import React, { useEffect } from 'react';

const PayByRazorPay = () => {
    const options = {
        key: 'rzp_test_iPUYZg3QpZNlDd',
        amount: '100', //  = INR 1
        name: 'Donation',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'khaja',
            contact: '6301557253',
            email: 'skkhajamohinuddin151@gmail.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
        <h1>To supprot our Community</h1>
            <button onClick={openPayModal}>
            Pay with Razorpay</button>
        </>
    );
};

export default PayByRazorPay;