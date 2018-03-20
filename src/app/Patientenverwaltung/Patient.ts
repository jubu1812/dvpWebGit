import { PatientId } from "app/Patientenverwaltung/PatientId";

export class Patient{      

    constructor(
        public id:PatientId,
        
        public vonap:string,
        public zunap:string,
        public stra:string,
        public plzl:number,
        public ort:string,
        public land:string,
        public kostentraeger:number,
    
        public vsnra:number,
        public vonvs:string,
        public zunvs:string
    )
    {}
    
}