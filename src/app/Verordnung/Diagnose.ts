export class Diagnose{
    public vo_id: number;
    public datd: Date;
    public diagn: string;
    constructor(
        datd: Date,
        diagn: string        
    ){
        this.datd = datd;
        this.diagn = diagn;
    }
}