import { Verordnung } from "./Verordnung";
import { Bewilligung } from "./Bewilligung";
import { Diagnose } from "./Diagnose";
import { Leistungserbringer } from "./Leistungserbringer";

export class VerordnungContainer{
    public vo:Verordnung;
    public be:Bewilligung[];
    public de:Diagnose[];
    public le:Leistungserbringer[];
}