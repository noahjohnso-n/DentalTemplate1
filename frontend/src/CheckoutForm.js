// import React from 'react';
// import {PaymentElement, useCheckout} from '@stripe/react-stripe-js';
// import EmailInput from './EmailInput.js';
// import PayButton from './PayButton.js';

// const CheckoutForm = () => {
//   const checkout = useCheckout();
//   return (
//     <form>
//         <EmailInput />
//         <PaymentElement options={{layout: 'accordion'}}/>
//         <PayButton />
//     </form>
//   )
// };

// export default CheckoutForm;

import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://yourwebsite.com/success", // Change to your success URL
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setMessage("Payment successful!");
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe || isLoading}>
                {isLoading ? "Processing..." : "Pay Now"}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CheckoutForm;
