import React from 'react'
import cls from './slideDrawer.module.scss'
import {showAuthModal} from "app/providers/store/reducers/htmlStates";
import {CloseBtn} from "shared/ui/closeButton/closeButton";
import Button from "shared/ui/button/Button";
import {PaypalBtn} from "features/payment/paypal/ui/paypalBtn";
interface SideDrawerInterface{
    showDrawer:boolean
}

export const SideDrawer:React.FC<SideDrawerInterface> = ({ showDrawer}  ) =>{
    const drawerClass = `${cls.sideDrawer} ${showDrawer?" open":""}`
    return (
        <div className={`${cls.sideDrawer} ${showDrawer?cls.open:""}`}>
            <div className={cls.sideDrawerHeader}>
                <h3 className={cls.sideDrawerHeaderTitle}>Cart Summary</h3>
                <CloseBtn  onClick={()=>{}} className={cls.closeBtnSpecific}/>
            </div>
            <div className={cls.cartContent}>

            </div>
            <div className={cls.checkoutBlock}>
                <div className={cls.agreement}>Shipping and taxes will be calculated at checkout.</div>
                <div className={cls.priceBlock}>
                    <div className={cls.total}><strong>Total</strong></div>
                    <div className={cls.total}><strong>228 USD</strong></div>
                </div>
                <PaypalBtn/>
                <Button className={cls.stripeBtn} onClick={()=>{}}>
                    Stripe
                </Button>
            </div>
        </div>
    )
}

