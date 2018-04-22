import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";

export class Leistungserbringung{
    public l: Leistungserbringer;
    public dat: Date;
    public vid: number;
    constructor(
         l: Leistungserbringer,
         dat: Date,
       vid: number
    )
    {
        this.l=l;
        this.dat=dat;
        this.vid=vid;
    }
}