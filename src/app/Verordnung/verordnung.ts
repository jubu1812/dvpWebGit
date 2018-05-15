import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { VerordnungsId } from "./VerordnungId";

export class Verordnung {
    public kundennummer:number;
    public vid: number;
    public sendung_id: number;
    public kostentraeger_id: number;
    public vpnrv: number;
    public zunav: string;
    public vdatum: Date;
    public vsnrp: number;

    constructor(
        kundennummer: number,
        kostentraeger_id: number,
        vpnrv: number,
        zunav: string,
        vdatum: Date,
        vsnrp: number,
    ) {
        this.kundennummer = kundennummer;
        this.kostentraeger_id = kostentraeger_id;
        this.vpnrv = vpnrv;
        this.zunav = zunav;
        this.vdatum = vdatum;
        this.vsnrp = vsnrp;
    }
}