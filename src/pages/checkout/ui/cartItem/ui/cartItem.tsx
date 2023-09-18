import React from 'react'
import cls from './cartItem.module.scss'
import {DeleteButton} from "shared/ui/deleteButton/deleteButton";
import {CartItemProps} from "../types"
import {InputNumber} from "shared/ui/inputNumber/inputNumber";

export const CartItem: React.FC<CartItemProps> = ({item, onDeleteClicked, order}) => {
    return (
        <div className={cls.itemContainer}>
            <div className={cls.itemWrapper}>
                <div className={cls.itemHeading}>
                    {/*<div className={cls.item}>*/}
                    {/*    <img src={item.imgUrl}/>*/}
                    {/*    <div><strong>{item.title}</strong></div>*/}
                    {/*</div>*/}
                    <div className={cls.serviceInfo}>
                        <img src={item.imgUrl} className={cls.serviceImage} alt={""}/>
                        <div className={cls.title}><strong> {item.title}</strong></div>
                    </div>
                    <DeleteButton onCLick={() => {
                        onDeleteClicked()
                    }}></DeleteButton>
                </div>
                {order.type === "Boost" && <div className={cls.serviceContainer}>
                    <label className={cls.checkBoxContainer}>
                        <input className={cls.options} type="checkbox"/>&nbsp;&nbsp;TWITCH.TV +4$
                    </label>
                    <label className={cls.checkBoxContainer}>
                        <input className={cls.options} type="checkbox"/>&nbsp;&nbsp;TWITCH.TV +4$
                    </label>
                    <label className={cls.checkBoxContainer}>
                        <input className={cls.options} type="checkbox"/>&nbsp;&nbsp;TWITCH.TV +4$
                    </label>
                    <label className={cls.checkBoxContainer}>
                        <input className={cls.options} type="checkbox"/>&nbsp;&nbsp;TWITCH.TV +4$
                    </label>
                    {/*{order.service.type === "Boost" && <BoostOrder order={order.service as MMRBoost}/>}*/}
                    {/*{order.service.type === "countable" && <></>}*/}
                </div>}

                <div className={cls.quantityContainer}>
                    <label className={cls.label}>Quantity</label>
                    <div className={cls.content}>
                        <InputNumber
                            order={order}
                            onDecrement={() => {
                            }}
                            onIncrement={() => {
                            }}
                        />
                        <div className={cls.priceBlock}><strong>0.72$</strong></div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
