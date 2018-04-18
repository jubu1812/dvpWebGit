export class Bewilligung {
    public vo_id: number;
    public bewnr: string;
    public bdat: Date;

    constructor(
        bewnr: string,
        bdat: Date
    ) {
        this.bewnr = bewnr;
        this.bdat = bdat;
    }
}