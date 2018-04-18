import { Diagnose } from "app/Verordnung/Diagnose";
import { Leistung } from "app/Verordnung/Leistung";
import { Bewilligung } from "app/Verordnung/Bewilligung";
import { Leistungserbringer } from "app/Verordnung/Leistungserbringer";
import { Leistungserbringung } from "app/Verordnung/Leistungserbringung";
import { VerordnungsId } from "./VerordnungId";

export class Verordnung {
    public id: VerordnungsId;
    public sendungs_id: number;
    public kostentraeger_id: string;
    public vpnrv: string;
    public zunav: string;
    public vadatum: Date;
    public svnrp: number;
    public diagnosen: Diagnose[];
    public leistungen: Leistung[];
    public bewilligungen: Bewilligung[];
    public leistungserbringer: Leistungserbringer[];

    constructor(
        kostentraeger_id: string,
        vpnrv: string,
        zunav: string,
        vadatum: Date,
        svnrp: number,
        diagnosen: Diagnose[],
        leistungen: Leistung[],
        bewilligungen: Bewilligung[],
        leistungserbringer: Leistungserbringer[]
    ) {

        //this.id=id;
        // this.sendungs_id= number;
         this.kostentraeger_id= kostentraeger_id;
         this.vpnrv= vpnrv;
         this.zunav= zunav;
         this.vadatum= vadatum;
         this.svnrp= svnrp;
         this.diagnosen= diagnosen;
         this.leistungen= leistungen;
         this.bewilligungen= bewilligungen;
         this.leistungserbringer= leistungserbringer;
    }
}