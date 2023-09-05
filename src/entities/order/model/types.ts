export type OrderStatus = "Finished" | "InProcess" | "UnPayed"

export interface Order{
    num:number,
    status:OrderStatus
}

export interface MMRBoost extends Service{
    fromMMR:number,
    toMMR:number,
}

export interface LowPriority extends Service{

}

export interface Service{
    amount?:number
}

