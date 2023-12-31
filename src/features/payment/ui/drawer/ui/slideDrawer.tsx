import React from 'react'
import cls from './slideDrawer.module.scss'
import {CloseBtn} from "shared/ui/closeButton/closeButton";
import Button from "shared/ui/button/Button";
import {PaypalBtn} from "features/payment/paypal/ui/paypalBtn";
import {Link} from "react-router-dom";
import {CartItem} from "pages/checkout/ui/cartItem";
import {Order} from "entities/order/model/types";
// import {MMRBoost} from "shared/config/dotaServices/dotaServices";
import {Rank as RankObject, ranks} from "shared/config/mmrBoostConfig/mmrBoostConfig";
import MMRBoostImage from 'public/assets/card_mmrBoost.png'
import {useAppSelector} from "app/providers/store/store";
import {ServiceInstance} from "widgets/card/types";
import { useDispatch } from 'react-redux';
import { createOrder } from 'entities/order/api/orderApi';
import { useNavigate } from 'react-router-dom';


interface SideDrawerInterface {
    showDrawer: boolean,
    closeDrawer: () => void,
}

type SliderPageType = "stripePayment" | "cart"
export const SideDrawer: React.FC<SideDrawerInterface> = ({showDrawer, closeDrawer}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orderState = useAppSelector(state=>state.orderReducer)
    React.useEffect(()=>{
        // console.log(orderState);
        if(orderState.status ==="fulfilled"){
            navigate(`/payment/${orderState.order._id}`) 
        }
    },[orderState.status])
    const contentContainerRef = React.useRef<null | HTMLDivElement>(null)
    const [currentPageType, setCurrentPageType] = React.useState<SliderPageType>("cart")
    const currentOrder = useAppSelector(state => state.orderReducer.order)
    const currentService = useAppSelector(state => state.orderReducer.currentService)
    return (
        <div className={`${cls.sideDrawer} ${showDrawer ? cls.open : ""}`}>
            <div className={cls.sideDrawerHeader}>
                <h3 className={cls.sideDrawerHeaderTitle}>Cart Summary</h3>
                <CloseBtn onClick={() => {
                    closeDrawer()
                }} className={cls.closeBtnSpecific}/>
            </div>
            <div className={cls.cartContent}>
                {(currentService && currentOrder)?
                    <CartItem item={currentService} onDeleteClicked={() => {}} order={currentOrder}/>:""
                }
            </div>
            <div className={cls.checkoutBlock}>
                <div className={cls.agreement}>Shipping and taxes will be calculated at checkout.</div>
                <div className={cls.priceBlock}>
                    <div className={cls.total}><strong>Total</strong></div>
                    <div className={cls.total}><strong>{currentOrder?.product.price}</strong></div>
                </div>
                    <Button className={`${cls.buyBtn}`} onClick={() => {
                        //send order to backend
                        //@ts-ignore
                        dispatch(createOrder(currentOrder))
                        closeDrawer()
                    }}>Checkout
                    </Button>
            </div>
        </div>
    )
}

