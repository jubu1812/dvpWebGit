export class Diagnose{    
    public datd: Date;
    public diagn: string;
    public vo_id: number;
    constructor(
        datd: Date,
        diagn: string       
    ){
        this.datd = datd;
        this.diagn = diagn;        
    }
}