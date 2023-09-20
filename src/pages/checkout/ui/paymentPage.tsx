import React, { FC } from 'react'
import cls from './paymentPage.module.scss'
import { PaypalBtn } from "features/payment/paypal/ui/paypalBtn";
import Button from "shared/ui/button/Button";
import Link from "shared/ui/link/link";
import { InputComponent } from "shared/ui/input/input";
import { StepIndicator } from "shared/stepIndicator/ui/stepIndicator";
import ProfileIcon from "public/assets/icon_profile.svg";
import img from 'public/assets/card_lowPriority.png';
import { useAppSelector } from 'app/providers/store/store';
import { useDispatch } from 'react-redux';
import { AccountCredentials, CreatePaypalOrder, getOrder } from 'entities/order/api/orderApi';
import ReactRouterDom, { useParams } from 'react-router-dom';
interface PaymentPageProps {

}

const PaymentPage: FC<PaymentPageProps> = ({ }) => {
    const dispatch = useDispatch()
    const {orderId} = useParams();
    const orderState = useAppSelector(state => state.orderReducer)
    
    React.useEffect(()=>{
        if(orderState.order==null){
            //@ts-ignore
           dispatch(getOrder(orderId))
       }
    },[])

   console.log(orderState.order);
   
    // React.useEffect(()=>{
       
      
    // },[orderState.status])
 
    const [email, setEmail] = React.useState("")
    const [steamId, setSteamId] = React.useState("")
    const [password, setPassword] = React.useState("")

    type PaymentStage = "cred" | "pay"
    const [stage, setStage] = React.useState<PaymentStage>("cred")
    return (
        <div className={cls.paymentPage}>
            {orderState.status ==="fulfilled" &&<div className={'wrapper'}>
                <div className={cls.orderContainer}>
                    {/*<img src={img} className={cls.banner}/>*/}
                    <div className={cls.header}>
                        <h2>{orderState.order.orderNumber}</h2>
                    </div>
                    <div className={cls.orderSummaryContainer}>
                        <StepIndicator step={1} className={cls.indicator} />
                        <div className={cls.orderSummary}>
                            <div className={cls.orderSummaryHeader}>
                                <div className={cls.orderHeader}>Order summary</div>
                                <Link className={cls.editBtn}>Edit</Link>
                            </div>
                            <div className={cls.cartContent}>
                                <div className={cls.cartItem}>
                                    <p>{orderState.order.product.name}</p>
                                    <p>x{orderState.order.product.amount}</p>
                                    <p>{orderState.order.product.amount * orderState.order.product.price} USD</p>
                                </div>
                            </div>
                            <div className={cls.totalContainer}>
                                <div className={cls.orderHeader}>Total</div>
                                <div className={cls.orderHeader}><strong>$0.72</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.checkoutContent}>
                        <div className={cls.gameAccountCredentials}>
                            <StepIndicator step={2} className={cls.indicator} />
                            <h3>Details</h3>
                            {Object.keys(orderState.order.accountCredentials).length === 0 ? (
                                <>
                                    <InputComponent value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} type={"text"} label={"Email"} />
                                    <InputComponent value={steamId} onChange={(e) => {
                                        setSteamId(e.target.value)
                                    }} type={"text"} label={"SteamID"} />
                                    <InputComponent value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} type={"password"} label={"Password"} />
                                    <Button className={cls.proceedToPaymentBtn} onClick={() => {
                                        const reqbody:AccountCredentials={
                                            orderId:orderId,
                                            email:email,
                                            password:password,
                                            steamId:steamId
                                        }
                                        //@ts-ignore
                                        dispatch(CreatePaypalOrder(reqbody))
                                    }}>Proceed to payment</Button>
                                </>) :
                                <div className={cls.readyInputContainer}>
                                    <div className={cls.userCredContainer}>
                                        <ProfileIcon className={cls.icon} />
                                        <div>{orderState.order.accountCredentials.email}</div>
                                    </div>
                                    <div className={cls.userCredContainer}>
                                        <ProfileIcon className={cls.icon} />
                                        <div>{orderState.order.accountCredentials.steamId}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={cls.paymentContainer}>
                        <StepIndicator step={3} className={cls.indicator} />
                        <h3>Payment</h3>
                        {orderState.order.payment &&<div className={cls.active}>
                            <div className={cls.finalSum}>Payment due 228$</div>
                            <hr />
                            <div className={cls.paymentOptions}>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.stripeBtn}`} onClick={() => { }}>Stripe</Button>
                                    <div className={cls.btnlabel}>Card payment, giropay,
                                        iDEAL, Bancontact and more
                                    </div>
                                </div>
                                <div className={cls.paymentOption}>
                                    <div>
                                        <PaypalBtn />
                                    </div>
                                    <div className={cls.btnlabel}>PayPal or card payment</div>
                                </div>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.cryptoBtn}`} onClick={() => { }}>coinbase</Button>
                                    <div className={cls.btnlabel}>
                                        Cryptocurrency
                                    </div>
                                </div>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>}
            
        </div>
    )
}

export default PaymentPage;