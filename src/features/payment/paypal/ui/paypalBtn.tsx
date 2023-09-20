import React from "react"
import {CreateOrderActions, loadScript} from "@paypal/paypal-js"
import { createOrder } from "entities/order/api/orderApi"
// import Button from "shared/ui/button/Button" 

interface PaypalBtnProps{
}



export const PaypalBtn:React.FC<PaypalBtnProps> = ({}) =>{
    const paypalBtnRef = React.useRef(null)
    const [paypalInstance,setPaypalInstance] = React.useState()
    
    React.useEffect(()=>{
        window.paypal
        .Buttons({
          async createOrder(){
            try{
                
                return ""
            }catch(e){
                return e
            }
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypalBtnRef.current);
    
    },[])



    return(
        <div ref={paypalBtnRef} style={{maxHeight:"39px", marginBottom:"2px"}} id={"paypalBtn"}></div>
    )
}