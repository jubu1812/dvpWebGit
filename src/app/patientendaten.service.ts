import { Injectable } from '@angular/core';
import { Patient } from "./Patientenverwaltung/Patient";
import { Http, Response, Request } from "@angular/http";
import 'rxjs/add/operator/map';
import { PatientId } from 'app/Patientenverwaltung/PatientId';

@Injectable()
export class PatientendatenService {
  constructor(private http:Http) {}//vorher leerer Konstrukor

  createPatient(patient:Patient):void{
    this.http.post('http://localhost:8080/createPatient',patient).subscribe();    
    console.log(patient.id.vsnrp);
  }

  /*getAllVerordnungen(): any{
    let data = {
   "VPNRV":""
      
    };
    let verordnungen=this.http.post('http://localhost:8080/???',data).map(response => response.json() as any);//RICHTIG LINK NOCH
    return verordnungen;
  }*/

  getPatientById(id:PatientId){
    var currentPatient = this.http.post('http://localhost:8080/getPatientById',id).map(response => response.json() as any);    
    return currentPatient;
  }

  getAlleKostentraeger(){
    let kostentraeger = this.http.post('http://localhost:8080/alleKostentraeger',null).map(response => response.json() as any);
    return kostentraeger;
  }
}
 

