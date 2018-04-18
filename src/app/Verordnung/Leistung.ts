export class Leistung {
    public vo_id: number;
    public datl: Date;
    public posnr: string;
    public anz: number;
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