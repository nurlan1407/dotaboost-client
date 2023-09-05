import React, {FC} from 'react'
import cls from './paymentPage.module.scss'
import {PaypalBtn} from "features/payment/paypal/ui/paypalBtn";
import Button from "shared/ui/button/Button";
import Link from "shared/ui/link/link";
import {MMRBoost} from "entities/order/model/types";
import {InputComponent} from "shared/ui/input/input";
import {StepIndicator} from "shared/stepIndicator/ui/stepIndicator";

interface PaymentPageProps {

}

const PaymentPage: FC<PaymentPageProps> = ({}) => {
    const paymentOptions = ["Paypal", "Stripe"]
    const [selectedPayment, setSelectedPayment] = React.useState<string | null>(null)


    return (
        <div className={cls.paymentPage}>
            <div className={cls.container}>
                <div className={'wrapper'}>
                    <div className={cls.orderContainer}>
                        <h2>Order #1337</h2>
                        <div className={cls.checkoutContent}>
                            <div className={cls.checkoutPager}>
                                <div className={cls.gameAccountCredentials}>
                                    <StepIndicator step={1} className={cls.indicator}/>
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
                                {/* когда нажимает на кнопку то там делается запрос и как только данные акка загрузятся откроется то что ниже (оплата) */}
                                {/*<div className={cls.paymentContainer}>*/}
                                {/*    <div className={cls.paypalBtnContainer}>*/}
                                {/*        <PaypalBtn/>*/}
                                {/*        <div>PayPal or card payment</div>*/}
                                {/*    </div>*/}
                                {/*    <div className={cls.stripeBtnContainer}>*/}
                                {/*        <Button className={cls.stripeBtn} onClick={() => {*/}
                                {/*            // handleSecondPage()*/}
                                {/*        }}>*/}
                                {/*            Stripe*/}
                                {/*        </Button>*/}
                                {/*        <div>Card payment, giropay,<br></br>iDEAL, Bancontact and more</div>*/}
                                {/*    </div>*/}
                                {/*    <div className={cls.stripeBtnContainer}>*/}
                                {/*        <Button className={cls.stripeBtn} onClick={() => {*/}
                                {/*            // handleSecondPage()*/}
                                {/*        }}>*/}
                                {/*            Stripe*/}
                                {/*        </Button>*/}
                                {/*        <div>Card payment, giropay,<br></br>iDEAL, Bancontact and more</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className={cls.orderSummaryContainer}>
                                <div className={cls.orderSummary}>
                                    <div className={cls.orderSummaryHeader}>
                                        <h3>Order summary</h3>
                                        <Link>Edit</Link>
                                    </div>
                                    <div className={cls.cartContent}>
                                        <div className={cls.cartItem}>
                                            <p>MMR boost</p>
                                            <p>x1</p>
                                            <p>$0.72</p>
                                        </div>
                                    </div>
                                    <div className={cls.totalContainer}>
                                        <h3>Total</h3>
                                        <div><strong>$0.72</strong></div>
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