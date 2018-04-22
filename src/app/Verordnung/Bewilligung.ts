export class Bewilligung {    
    public bewnr: string;
    public bdat: Date;
    public vid: number;

    constructor(
        bewnr: string,
        bdat: Date
    ) {
        this.bewnr = bewnr;
        this.bdat = bdat;
    }
}