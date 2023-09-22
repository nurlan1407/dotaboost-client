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
import { AccountCredentials, AddOrderUserCredentials, ConfirmPaypalOrder, CreatePaypalOrder, CreateStripeOrder, getOrder } from 'entities/order/api/orderApi';
import ReactRouterDom, { useNavigate, useParams } from 'react-router-dom';
import { LoadingSpinner } from 'widgets/loading';
import Spinner from 'shared/ui/spinner/spinner';
interface PaymentPageProps {

}

const PaymentPage: FC<PaymentPageProps> = ({ }) => {
    const navigage = useNavigate();
    const dispatch = useDispatch()
    const {orderId} = useParams();
    //@ts-ignore
    const onPaymentApprove = () =>{
        //@ts-ignore
        dispatch(ConfirmPaypalOrder(orderId))
        navigage("/home")
    }
    React.useEffect(()=>{
        //@ts-ignore
        dispatch(getOrder(orderId));
    },[dispatch])
    const orderState = useAppSelector(state => state.orderReducer)
    const [email, setEmail] = React.useState("")
    const [steamId, setSteamId] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
    
        <div className={cls.paymentPage}>
             <div className={'wrapper'}>
                <div className={cls.orderContainer}>
                {orderState.order === null ? 
                <div>
                    <Spinner/>
                </div> :
                <>
                <div className={cls.header}>
                        <h2>Order #{orderState.order.orderNumber}</h2>
                        <hr></hr>
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
                                    {orderState.error && <div style={{color:"red"}}>{orderState.error}</div>}
                                    <Button className={cls.proceedToPaymentBtn} onClick={() => {
                                        const reqbody:AccountCredentials={
                                            orderId:orderId,
                                            email:email,
                                            password:password,
                                            steamId:steamId
                                        }
                                        //@ts-ignore
                                        dispatch(AddOrderUserCredentials(reqbody))
                                    }}>{orderState.status === "loading" ? <Spinner></Spinner> : "Proceed to payment"}</Button>
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
                        {orderState.order.accountCredentials.email && <div className={cls.active}>
                            <div className={cls.finalSum}>Payment due 228$</div>
                            <hr />
                            <div className={cls.paymentOptions}>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.stripeBtn}`} onClick={() => { 
                                        const reqbody:AccountCredentials={
                                            orderId:orderId,
                                            email:email,
                                            password:password,
                                            steamId:steamId
                                        }
                                        //@ts-ignore
                                        dispatch(CreateStripeOrder(reqbody))
                                    }}>Stripe</Button>
                                </div>
                                <div className={cls.paymentOption}>
                                    <div>
                                        <PaypalBtn 
                                            orderId={orderId} 
                                            onPaypalApprove={onPaymentApprove}  
                                        />
                                    </div>
                                    <div className={cls.btnlabel}>PayPal or card payment</div>
                                </div>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.cryptoBtn}`} onClick={() => { }}>coinbase</Button>
                                </div>
                            </div>
                        </div> }
                    </div>
                
                </>}
                    
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;