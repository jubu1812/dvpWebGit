import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";

export class Leistungserbringung{
    constructor(
        public l: Leistungserbringer,
        public DAT: Date
    )
    {}
}