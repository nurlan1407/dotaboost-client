import {User} from "entities/user/model/types";


export type RegisterResponse ={
    msg:string,
    user:User,
    accessToken:string
}