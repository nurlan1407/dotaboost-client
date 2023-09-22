import React from "react"
import { CreateOrderActions, loadScript } from "@paypal/paypal-js"
import { AddOrderUserCredentials, createOrder } from "entities/order/api/orderApi"
import { CreatePaypalOrder } from "entities/order/api/orderApi"
import { useDispatch } from "react-redux"
// import Button from "shared/ui/button/Button" 

interface PaypalBtnProps {
  orderId: string,
  onPaypalApprove: () => void
}



export const PaypalBtn: React.FC<PaypalBtnProps> = ({ orderId, onPaypalApprove }) => {
  const dispatch = useDispatch()
  const paypalBtnRef = React.useRef(null)
  const [paypalInstance, setPaypalInstance] = React.useState()

  React.useEffect(() => {
    window.paypal
      .Buttons({
        async createOrder() {
          const response = await fetch(`http://localhost:8080/order/payment/create/${orderId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": "true"
            },
          });
          const data = await response.json();
          return data.payment.transactionId;
        },
        style: {
          layout: "horizontal",
          label: "paypal",
          height: 39,
          color: "blue",
          shape: "pill",
          tagline: false,
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          onPaypalApprove();
          console.log(order);
        },
        onError: (err) => {
          alert(err)
          console.log(err);
        },
      })
      .render(paypalBtnRef.current);

  }, [])



  return (
    <div ref={paypalBtnRef} style={{ maxHeight: "39px", marginBottom: "2px" }} id={"paypalBtn"}></div>
  )
}