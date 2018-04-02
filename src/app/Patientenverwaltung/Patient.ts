import { PatientId } from "app/Patientenverwaltung/PatientId";

export class Patient {

    public id: PatientId;
    public vonap: string;
    public zunap: string;
    public stra: string;
    public plzl: number;
    public ort: string;
    public land: string;
    public kostentraeger: number;

    public vsnra: number;
    public vonvs: string;
    public zunvs: string;

    constructor(id: PatientId,
        vonap: string,
        zunap: string,
        stra: string,
        plzl: number,
        ort: string,
        land: string,
        kostentraeger: number,

        vsnra: number,
        vonvs: string,
        zunvs: string
    ) {
        this.id = id;
        this.vonap = vonap;
        this.zunap = zunap;
        this.stra = stra;
        this.plzl = plzl;
        this.ort = ort;
        this.land = land;
        this.kostentraeger = kostentraeger;
        this.vsnra = vsnra;
        this.vonvs = vonvs;
        this.zunvs = zunvs;
    }



}