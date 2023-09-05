import React from 'react'
import cls from './slideDrawer.module.scss'
import {CloseBtn} from "shared/ui/closeButton/closeButton";
import Button from "shared/ui/button/Button";
import {PaypalBtn} from "features/payment/paypal/ui/paypalBtn";
import {Link} from "react-router-dom";


interface SideDrawerInterface {
    showDrawer: boolean,
    closeDrawer: () => void
}

type SliderPageType = "stripePayment" | "cart"
export const SideDrawer: React.FC<SideDrawerInterface> = ({showDrawer, closeDrawer}) => {
    const contentContainerRef = React.useRef<null | HTMLDivElement>(null)
    const [currentPageType, setCurrentPageType] = React.useState<SliderPageType>("cart")


    const handleSecondPage = () => {
        contentContainerRef.current.className = "drawerPrevPage"
        setCurrentPageType("stripePayment")
    }

    const handleFirstPage = () => {
        contentContainerRef.current.className = "drawerNextPage"
        setCurrentPageType("cart")
    }

    return (
        <div className={`${cls.sideDrawer} ${showDrawer ? cls.open : ""}`}>
            <div className={cls.sideDrawerHeader}>
                <h3 className={cls.sideDrawerHeaderTitle}>Cart Summary</h3>
                <CloseBtn onClick={() => {
                    if (currentPageType === "cart") closeDrawer()
                    else if (currentPageType === "stripePayment") handleFirstPage()
                }} className={cls.closeBtnSpecific}/>
            </div>
            <div className={cls.pageWrapper}
                 ref={contentContainerRef}
                 onAnimationEnd={() => {
                     if (contentContainerRef.current) {
                         contentContainerRef.current.style.animation = ""
                     }
                 }}
            >
                <div className={cls.cartContent}>
                </div>
                <div className={cls.checkoutBlock}>
                    <div className={cls.agreement}>Shipping and taxes will be calculated at checkout.</div>
                    <div className={cls.priceBlock}>
                        <div className={cls.total}><strong>Total</strong></div>
                        <div className={cls.total}><strong>228 USD</strong></div>
                    </div>
                    <Link to={"/payment"}>
                        <Button className={`${cls.buyBtn}`} onClick={()=>{}}>Checkout</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

