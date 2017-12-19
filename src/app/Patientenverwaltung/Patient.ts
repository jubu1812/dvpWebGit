export class Patient{

    VSNRP:number;
    VONAP:string;
    ZUNAP:string;
    STRA:string;
    PLZL:number;
    ORT:string;
    LAND:string;

    VSNRA:number;
    VONVS:string;
    ZUNVS:string;

    constructor(VSNRP, VONAP, ZUNAP, STRA, PLZL, ORT, LAND, VSNRA, VONVS, ZUNVS){
        this.VSNRP = VSNRP;
        this.VONAP = VONAP;
        this.ZUNAP = ZUNAP;
        this.STRA = STRA;
        this.PLZL = PLZL;
        this.ORT = ORT;
        this.LAND = LAND; 

        this.VSNRA = VSNRA;
        this.VONVS = VONVS;
        this.ZUNVS = ZUNVS;
    }
}