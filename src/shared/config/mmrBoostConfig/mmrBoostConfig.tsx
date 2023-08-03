import rank1 from 'public/assets/rank_1.png'
import rank2 from 'public/assets/rank_2.png'
import rank3 from 'public/assets/rank_3.png'
import rank4 from 'public/assets/rank_4.png'
import rank5 from 'public/assets/rank_5.png'
import rank6 from 'public/assets/rank_6.png'
import rank7 from 'public/assets/rank_7.png'



export interface Rank{
    min:number
    max:number
    name:string
    img:string
}

export const ranks:Rank[] = [
    {
        min:0,
        max:1000,
        name:"herald1",
        img:rank1
    },
    {
        min: 1001,
        max: 2000,
        name:"guardian",
        img:rank2
    },
    {
        min:2001,
        max: 3000,
        name:"Archon",
        img: rank3
    },
    {
        min:3001,
        max: 4000,
        name:"Legend",
        img: rank4
    },
    {
        min:4001,
        max: 5000,
        name:"Ancient",
        img: rank5
    },
    {
        min:5001,
        max: 6000,
        name:"Divine",
        img: rank6
    },
    {
        min:6001,
        max: 8000,
        name:"Immortal",
        img: rank7
    }
]




// export const MMRBoostConfig