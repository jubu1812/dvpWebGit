import {Verordnung} from 'app/Verordnung/Verordnung';

export class Sendung{
    public periode:string;
    public kundennummer: number;    
    public status: number;
    
    constructor( 
        periode:string,
        kundennummer:number        
    ){
        this.kundennummer = kundennummer;
        this.periode = periode;
        this.status=0;
    }
}