import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";

export class Leistungserbringung{
    public l: Leistungserbringer;
    public dat: Date;
    public vo_id: number;
    constructor(
         l: Leistungserbringer,
         dat: Date,
       vo_id: number
    )
    {
        this.l=l;
        this.dat=dat;
        this.vo_id=vo_id;
    }
}