import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";

export class Leistungserbringung{
    constructor(
        public l: Leistungserbringer,
        public dat: Date,
        public vo_id: number
    )
    {}
}