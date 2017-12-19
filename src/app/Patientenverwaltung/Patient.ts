export class Patient{

    public VSNRP:number;
    public  VONAP:string;
    public  ZUNAP:string;
    public STRA:string;
    public PLZL:number;
    public ORT:string;
    public LAND:string;

    public VSNRA:number;
    public VONVS:string;
    public ZUNVS:string;

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