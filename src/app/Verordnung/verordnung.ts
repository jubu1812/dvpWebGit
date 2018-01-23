import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { Leistungserbringung } from "app/Verordnung/Leistungserbringung";

export class Verordnung{
    constructor(
        public VOID: number,
        public VPNRV: string,
        public ZUNAV: string,
        public VDATUM: Date,
        
        public diagnosen: Array<Diagnose>,
        public leistungen: Array<Leistung>,
        public bewilligungen: Array<Bewilligung>,
        public leistungserbringungen: Array<Leistungserbringung>
    ){

    }
}