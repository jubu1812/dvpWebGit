import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { Leistungserbringung } from "app/Verordnung/Leistungserbringung";
import { VerordnungsId } from "./VerordnungId";

export class Verordnung {
    public id: VerordnungsId;
    public sendungs_id: number;
    public kostentraeger_id: number;
    public vpnrv: string;
    public zunav: string;
    public vadatum: Date;
    public vsnrp: number;

    constructor(
        kundennummer: number,
        kostentraeger_id: number,
        vpnrv: string,
        zunav: string,
        vadatum: Date,
        vsnrp: number,
    ) {
        //this.id=id;
        // this.sendungs_id= number;
        this.id = new VerordnungsId();
        this.id.kundennummer = kundennummer;
        this.kostentraeger_id = kostentraeger_id;
        this.vpnrv = vpnrv;
        this.zunav = zunav;
        this.vadatum = vadatum;
        this.vsnrp = vsnrp;
    }
}