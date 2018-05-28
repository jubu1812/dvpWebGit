import { Verordnung } from "./Verordnung";
import { Bewilligung } from "./Bewilligung";
import { Diagnose } from "./Diagnose";
import { Leistung } from "./Leistung";
import { Leistungserbringer } from "./Leistungserbringer";

export class VerordnungContainer{
    public verordnung:Verordnung;
    public bewilligungen: Bewilligung[];
    public diagnosen: Diagnose[];
    public leistungen: Leistung[];
    public leistungserbringer:Leistungserbringer[];

    constructor(){
        this.verordnung = null;
        this.bewilligungen = [];
        this.diagnosen = [];
        this.leistungen = [];
        this.leistungserbringer = [];
    }
}



