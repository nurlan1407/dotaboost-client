export interface Product{
    productId:string,
    serviceId:number,
    name:string,
    price:number,
    imgUrl:string,
    amount:number|null,
}

export interface MMRBoostProduct extends Product{
    fromMMR:number,
    toMMR:number
}
