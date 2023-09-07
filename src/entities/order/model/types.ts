export type OrderStatus = "Finished" | "InProcess" | "UnPayed"
export type ServiceType = "Boost"|"countable" //"Boost" has 2 values from and to, countable is type of boost where amount of games is required, each of them will have different renders
export interface Order{
    status:OrderStatus,
    service:Service
}

export interface MMRBoost extends Service{
    fromMMR:number,
    fromMMRRankImage:string,
    toMMR:number,
    toMMRRankImage:string
}

export interface LowPriority extends Service{
    // amount:number
}
export interface Calibration extends Service{
    // amount:number
}

export interface Service{
    amount?:number
    type:ServiceType
}

