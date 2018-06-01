import { Verordnung } from "./Verordnung";
import { Bewilligung } from "./Bewilligung";
import { Diagnose } from "./Diagnose";
import { Leistungserbringer } from "./Leistungserbringer";
import { Leistung } from "./Leistung";

export class VerordnungContainer{
    public vo:Verordnung;
    public bewilligungen:Bewilligung[];
    public diagnosen:Diagnose[];
    public leistungen:Leistung[];
    public leistungserbringer:Leistungserbringer[];
}