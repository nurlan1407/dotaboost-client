export type Session = {
    accessToken: string
    userId: string
}

// TODO: FSD: Move user to entities/user/model/types.ts
export interface User  {
    id: string
    email: string,
    password:string,
    accessToken?:string
}



