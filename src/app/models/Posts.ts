import { timestamp } from "rxjs"

export interface IPost {
    id?:number,
    title: string,
    image: string,
    createAt: string,
    categoryPostId: number,
    shortDesc: string,
    desc: string
}{timestamp: true}