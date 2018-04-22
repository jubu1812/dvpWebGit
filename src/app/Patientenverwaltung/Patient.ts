import { PatientId } from "app/Patientenverwaltung/PatientId";

export class Patient {

    public vsnrp:number;
    public kundennummer:number;    
    public vonap: string;
    public zunap: string;
    public stra: string;
    public plzl: number;
    public ort: string;
    public land: string;
    public kostentraeger_id: number;

    public vsnra: number;
    public vonvs: string;
    public zunvs: string;

    constructor(
        vsnrp:number,
        kundennummer:number,    
        vonap: string,
        zunap: string,
        stra: string,
        plzl: number,
        ort: string,
        land: string,
        kostentraeger_id: number,

        vsnra: number,
        vonvs: string,
        zunvs: string
    ) {
        this.vsnrp = vsnrp;
        this.kundennummer = kundennummer;
        this.vonap = vonap;
        this.zunap = zunap;
        this.stra = stra;
        this.plzl = plzl;
        this.ort = ort;
        this.land = land;
        this.kostentraeger_id = kostentraeger_id;
        this.vsnra = vsnra;
        this.vonvs = vonvs;
        this.zunvs = zunvs;
    }



}