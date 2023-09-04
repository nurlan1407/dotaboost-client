import React from "react"
import {loadScript} from "@paypal/paypal-js"
import Button from "shared/ui/button/Button"

interface PaypalBtnProps{

}

export const PaypalBtn:React.FC = () =>{
    const paypalBtnRef = React.useRef()
    loadScript({clientId:"AY0dnmACG1u1jyrFGmSQU9R857JY4T2nI_bQ_VYEHR8fshsaRLFD8HRuK-hkRbBkfwrL8hCmcc7gIvTF"})
        .then((paypal)=>{
            paypal
                .Buttons()
                .render(paypalBtnRef.current)
                .catch((error)=>{
                    console.error("paypal error: "+ error)
                })
        }).catch((error)=>{
        console.error("Failed to load paypal SKD: "+ error)
    })


    return(
        <div ref={paypalBtnRef}></div>
    )
}