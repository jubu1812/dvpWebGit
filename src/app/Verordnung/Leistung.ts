export class Leistung {    
    public datl: Date;
    public posnr: string;
    public anz: number;
    public vid: number;
    constructor(
        datl: Date,
        posnr: string,
        anz: number
    ) { 
        this.datl = datl;
        this.posnr = posnr;
        this.anz = anz;
    }
}