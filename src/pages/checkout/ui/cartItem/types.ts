import {ServiceInstance} from "widgets/card/types";
import {Order, Service} from "entities/order/model/types";

export interface CartItemProps{
    order:Order,
    item:ServiceInstance,
    onDeleteClicked:()=>void
}