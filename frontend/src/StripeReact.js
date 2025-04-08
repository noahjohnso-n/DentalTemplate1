// import {loadStripe} from '@stripe/stripe-js';
// import React from 'react';
// import {Elements} from '@stripe/react-stripe-js';
// // import {CheckoutProvider} from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm.js';

// const StripeReact = () => {

//     const fetchClientSecret = () => {
//         return fetch('/create-checkout-session', {method: 'POST'})
//         .then((response) => response.json())
//         .then((json) => json.checkoutSessionClientSecret)
//     };

//     const stripe = loadStripe("pk_test_51R4joI4WeObGo2geYm7x4fjsSgj9DwsxhNT9Mb5c8LC1cWeTsqvG2t6yZgW2W5QjZ3BtXLocYdKPa9Egq691iCCm00iBnpWaZu", {
//         betas: ['custom_checkout_beta_6'],
//     });

//   return (
//     <Elements
//       stripe={stripe}
//       options={{fetchClientSecret}}
//     >
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default StripeReact;




















// import { loadStripe } from "@stripe/stripe-js";
// import React, { useState, useEffect } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm.js";

// // Initialize Stripe outside of the component to prevent re-initialization on each render
// const stripePromise = loadStripe("pk_test_51R4joI4WeObGo2geYm7x4fjsSgj9DwsxhNT9Mb5c8LC1cWeTsqvG2t6yZgW2W5QjZ3BtXLocYdKPa9Egq691iCCm00iBnpWaZu", {
//     betas: ['custom_checkout_beta_6'],
// });

// const StripeReact = () => {
//     const [clientSecret, setClientSecret] = useState("");

//     // useEffect(() => {
//     //     fetch("/create-checkout-session", { method: "POST" })
//     //         .then((res) => res.json())
//     //         .then((data) => {
//     //             if (data.checkoutSessionClientSecret) {
//     //                 setClientSecret(data.checkoutSessionClientSecret);
//     //             } else {
//     //                 console.error("Error: No client secret received.");
//     //             }
//     //         })
//     //         .catch((error) => console.error("Error fetching client secret:", error));
//     // }, []);

//     useEffect(() => {
//         fetch("/create-payment-intent", { method: "POST" })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                 } else {
//                     console.error("Error: No client secret received.");
//                 }
//             })
//             .catch((error) => console.error("Error fetching payment intent:", error));
//     }, []);
    

//     const elementsOptions = {
//         clientSecret,
//     };

//     return (
//         <div>
//             {!clientSecret ? (
//                 <p>Loading payment details...</p>
//             ) : (
//                 <Elements stripe={stripePromise} options={elementsOptions}>
//                     <CheckoutForm />
//                 </Elements>
//             )}
//         </div>
//     );
// };

// export default StripeReact;












import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm.js";
// import dotenv from "dotenv";

const secret_key = process.env.STRIPE_SECRET_KEY;

const stripePromise = loadStripe(secret_key); // Replace with your actual Public Key

const StripeReact = () => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 10000 }), // Amount in cents ($100)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
            } else {
                console.error("Error: No client secret received.");
            }
        })
        .catch((error) => console.error("Error fetching payment intent:", error));
    }, []);

    const options = clientSecret ? { clientSecret } : null;

    return (
        <div>
            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            ) : (
                <p>Loading payment details...</p>
            )}
        </div>
    );
};

export default StripeReact;
