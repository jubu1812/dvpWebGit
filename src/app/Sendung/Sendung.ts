import {Verordnung} from 'app/Verordnung/Verordnung';

export class Sendung{
    public id:number;
    public kundennummer: number;
    public periode:string;
    public abgeschlossen: number;
    
    constructor(id:number, 
        kundennummer:number, 
        periode:string){
        this.id = id;
        this.kundennummer = kundennummer;
        this.periode = periode;
        this.abgeschlossen=0;
    }
}