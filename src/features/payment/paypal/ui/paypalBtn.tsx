import React from "react"
import {CreateOrderActions, loadScript} from "@paypal/paypal-js"
import Button from "shared/ui/button/Button"

interface PaypalBtnProps{

}

export const PaypalBtn:React.FC = () =>{
    const paypalBtnRef = React.useRef(null)
    React.useEffect(()=>{
        loadScript({clientId:"AY0dnmACG1u1jyrFGmSQU9R857JY4T2nI_bQ_VYEHR8fshsaRLFD8HRuK-hkRbBkfwrL8hCmcc7gIvTF"})
            .then((paypal)=>{
                paypal
                    .Buttons({
                        createOrder:(data:Record<string, unknown>,actions:CreateOrderActions)=>{
                            return actions.order.create({
                                intent:"CAPTURE",
                                purchase_units:[
                                    {
                                        description:"Boost dota account",
                                        amount:{
                                            currency_code:"USD",
                                            value:"228.00",
                                        }
                                    }
                                ]
                            })
                        },
                        style:{
                            color:"blue",
                            shape:"pill"
                        },
                        
                        onApprove: async (data,actions)=>{
                            const order = await actions.order.capture()
                            console.log("success", order);
                        },
                        onError:(err)=>{
                            console.log(err)
                        }
                    })
                    .render(paypalBtnRef.current)
                    .catch((error)=>{
                        console.error("paypal error: "+ error)
                    })
            }).catch((error)=>{
            console.error("Failed to load paypal SKD: "+ error)
        })
    },[])



    return(
        <div ref={paypalBtnRef} id={"paypalBtn"}></div>
    )
}