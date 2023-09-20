import { Product } from "entities/products/types";
import { AccountCredentials } from "../api/orderApi";

export type OrderStatus = "Finished" | "InProcess" | "UnPayed";
export type ServiceType = "Boost"|"countable" //"Boost" has 2 values from and to, countable is type of boost where amount of games is required, each of them will have different renders
export type Payment={
    paymentMethod: String,     // Payment method used, e.g., "PayPal", "Credit Card"
    transactionId: String,     // Payment transaction ID or reference
    status: string  
};

export interface MMRBoost extends Service{
    fromMMR:number,
    toMMR:number,
}

export interface LowPriority extends Service{
    // amount:number
}
export interface Calibration extends Service{
    // amount:number
}

export interface Service{
    amount?:number,
    type:ServiceType
}

export interface Order{
    _id:string|null //"sda",
    orderNumber?:number 
    title:string,
    createdAt:number,
    payment?:Payment|null,
    product:Product,
    type:ServiceType,
    status:OrderStatus,
    accountCredentials?:AccountCredentials|null
}

