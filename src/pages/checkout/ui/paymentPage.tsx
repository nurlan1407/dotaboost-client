import React, {FC} from 'react'
import cls from './paymentPage.module.scss'
import {PaypalBtn} from "features/payment/paypal/ui/paypalBtn";
import Button from "shared/ui/button/Button";
import Link from "shared/ui/link/link";
import {InputComponent} from "shared/ui/input/input";
import {StepIndicator} from "shared/stepIndicator/ui/stepIndicator";
import img from 'public/assets/card_lowPriority.png'
interface PaymentPageProps {

}

const PaymentPage: FC<PaymentPageProps> = ({}) => {
    return (
        <div className={cls.paymentPage}>
            <div className={'wrapper'}>
                <div className={cls.orderContainer}>
                    {/*<img src={img} className={cls.banner}/>*/}
                    <div className={cls.header}>
                        <h2>Order #1337</h2>
                    </div>
                    <div className={cls.orderSummaryContainer}>
                        <StepIndicator step={1} className={cls.indicator}/>
                        <div className={cls.orderSummary}>
                            <div className={cls.orderSummaryHeader}>
                                <div className={cls.orderHeader}>Order summary</div>
                                <Link className={cls.editBtn}>Edit</Link>
                            </div>
                            <div className={cls.cartContent}>
                                <div className={cls.cartItem}>
                                    <p>MMR boost</p>
                                    <p>x1</p>
                                    <p>$0.72</p>
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
                            <StepIndicator step={2} className={cls.indicator}/>
                            <h3>Details</h3>
                            <InputComponent value={''} onChange={() => {
                            }} type={"text"} label={"Email"}/>
                            <InputComponent value={''} onChange={() => {
                            }} type={"text"} label={"SteamID"}/>
                            <InputComponent value={''} onChange={() => {
                            }} type={"password"} label={"Password"}/>
                            <Button className={cls.proceedToPaymentBtn} onClick={() => {
                            }}>Proceed to payment</Button>
                        </div>
                    </div>
                    <div className={cls.paymentContainer}>
                        <StepIndicator step={3} className={cls.indicator}/>
                        <h3>Payment</h3>
                        <div className={cls.active}>
                            <div className={cls.finalSum}>Payment due 228$</div>
                            <hr/>
                            <div className={cls.paymentOptions}>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.stripeBtn}`} onClick={()=>{}}>Stripe</Button>
                                    <div className={cls.btnlabel}>Card payment, giropay,
                                        iDEAL, Bancontact and more
                                    </div>
                                </div>
                                <div className={cls.paymentOption}>
                                    <div>
                                        <PaypalBtn/>
                                    </div>
                                    <div className={cls.btnlabel}>PayPal or card payment</div>
                                </div>
                                <div className={cls.paymentOption}>
                                    <Button className={` ${cls.buyBtn} ${cls.cryptoBtn}`} onClick={()=>{}}>coinbase</Button>
                                    <div className={cls.btnlabel}>
                                        Cryptocurrency
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentPage;