export class Bewilligung {    
    public bewnr: string;
    public bdat: Date;
    public vo_id: number;

    constructor(
        bewnr: string,
        bdat: Date
    ) {
        this.bewnr = bewnr;
        this.bdat = bdat;
    }
}