import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { Leistungserbringung } from "app/Verordnung/Leistungserbringung";
import { VerordnungsId } from "./VerordnungId";

export class Verordnung {
    public id: VerordnungsId;
    public sendungs_id:number;

    constructor(       
        public kostentraeger_id: string,
        public vpnrv: string,
        public zunav: string,
        public vadatum: Date,
        public svnrp: number       
    ) {
    }
}