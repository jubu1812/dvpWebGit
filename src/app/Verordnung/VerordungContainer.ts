import { Verordnung } from "./Verordnung";
import { Bewilligung } from "./Bewilligung";
import { Diagnose } from "./Diagnose";
import { Leistung } from "./Leistung";
import { Leistungserbringer } from "./Leistungserbringer";

export class VerordnungContainer{
    public verordnung:Verordnung;
    public bewilligung: Bewilligung;
    public diagnose: Diagnose;
    public leistung: Leistung;
    public leistungserbringer:Leistungserbringer ;

    constructor(verordnung:Verordnung, bewilligung:Bewilligung, diagnose:Diagnose,leistung:Leistung,leistungserbringer:Leistungserbringer){
        this.verordnung = verordnung;
        this.bewilligung = bewilligung;
        this.diagnose = diagnose;
        this.leistung = leistung;
        this.leistungserbringer = leistungserbringer;
    }
}



