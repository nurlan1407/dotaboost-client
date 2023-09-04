import React from "react"
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe, StripeElementsOptions} from '@stripe/stripe-js'
import {StripeForm} from "features/payment/stripe/ui/stripeForm"

const stripePromise = loadStripe('rk_test_51NbnJoIixW1Fj4w2plStx2Rsq9I0uLlUHkjdID31RrfJ6AGuWERoAweIT4fKZYTxooyXUEUY3B7bztK6W83LYoIi00nh9FpA3V')


export const StripePage:React.FC = () =>{
    const [clientSecret, setClientSecret] = React.useState("");
    React.useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4000/payment/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);


    const options:StripeElementsOptions = {
        clientSecret,
        appearance:{
            theme:'stripe'
        }
    };



    return (
        <>

                <Elements options={options} stripe={stripePromise}>
                    <StripeForm/>
                </Elements>

        </>

    )
}