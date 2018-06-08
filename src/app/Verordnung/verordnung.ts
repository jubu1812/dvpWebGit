import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { VerordnungsId } from "./VerordnungId";

export class Verordnung {
    public kundennummer:number;
    public vid: number;
    public periode: string;
    public kostentraeger_id: number;
    public vpnrv: number;
    public zunav: string;
    public vdatum: Date;
    public vsnrp: number;
    public status: number;

    constructor(
        kundennummer: number,
        kostentraeger_id: number,
        vpnrv: number,
        zunav: string,
        vdatum: Date,
        vsnrp: number,
        periode: string
    ) {
        this.kundennummer = kundennummer;
        this.kostentraeger_id = kostentraeger_id;
        this.vpnrv = vpnrv;
        this.zunav = zunav;
        this.vdatum = vdatum;
        this.vsnrp = vsnrp;
        this.periode = periode;
        this.status = 0;
    }
}