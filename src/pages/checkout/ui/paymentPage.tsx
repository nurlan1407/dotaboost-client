import React, { FC } from 'react'
import cls from './paymentPage.module.scss'

interface PaymentPageProps{

}
const PaymentPage: FC<PaymentPageProps> = ({ }) => {
    const paymentOptions = ["Paypal", "Stripe"]
    const [selectedPayment, setSelectedPayment] = React.useState<string|null>(null)
    return (
        <div className={cls.paymentPage}>
                <div className={cls.container}>
                    <div className={'wrapper'}>
                    <h2 className={cls.header}>Order #212</h2>
                    <form className={cls.inputContainer}>
                        <input className={cls.input} onChange={()=>{}} type="email" placeholder="Enter your Email"></input>
                        <div className={cls.gameAccountCredentials}>
                            <input className={cls.input} onChange={()=>{}} type="text" placeholder="steamID"></input>
                            <input className={cls.input} onChange={()=>{}} type="password" placeholder="Password"></input>
                        </div>
                        <select className={cls.selection}>
                            <option className={cls.option}>{selectedPayment?selectedPayment:'Select payment option'}</option>
                            {paymentOptions.map((option,index)=>{
                                return(<option className={cls.option} key={index}>{option}</option>)
                            })}
                        </select>
                    </form>
                    {selectedPayment === "Paypal" &&<></>}
                    {selectedPayment === "Stripe" &&<></>}
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;