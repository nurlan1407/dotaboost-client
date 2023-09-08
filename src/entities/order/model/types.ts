import {Service} from "shared/config/dotaServices/dotaServices";
export type OrderStatus = "Finished" | "InProcess" | "UnPayed"
export interface Order{
    id?:number
    status:OrderStatus,
    service:Service
}

