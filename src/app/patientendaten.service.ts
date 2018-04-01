import { Injectable } from '@angular/core';
import { Patient } from "./Patientenverwaltung/Patient";
import { Http, Response, Request } from "@angular/http";
import 'rxjs/add/operator/map';
import { PatientId } from 'app/Patientenverwaltung/PatientId';

@Injectable()
export class PatientendatenService {
  constructor(private http:Http) {}//vorher leerer Konstruktor

  currPatient:Patient;

  getCurrPatient(){
    return this.currPatient;
  }

  setCurrPatient(newPat:Patient){
    this.currPatient = newPat;
  }

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
    var currentPatient = this.http.post('http://localhost:8080/patientById',id).map(x =>(x.text() ? x.json() : null) as any);    
    return currentPatient;
  }

  getAlleKostentraeger(){
    let data = {};
    let kostentraeger = this.http.post('http://localhost:8080/alleKostentraeger',data).map(response => response.json() as any);
    return kostentraeger;
  }
}
 

