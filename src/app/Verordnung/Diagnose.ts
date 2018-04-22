export class Diagnose{    
    public datd: Date;
    public diagn: string;
    public vid: number;
    constructor(
        datd: Date,
        diagn: string       
    ){
        this.datd = datd;
        this.diagn = diagn;        
    }
}