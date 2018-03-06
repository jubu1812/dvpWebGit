import { Injectable } from '@angular/core';
import { Patient } from "./Patientenverwaltung/Patient";
import { Http, Response, Request } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PatientendatenService {
  constructor(private http:Http) {}//vorher leerer Konstrukor

  createPatient(patient:Patient):void{
    let data = {
      "PatientenEntity":patient,
     
    }
    this.http.post('http://localhost:8080/createPatient',data).subscribe();
    

    
  }

  getAllVerordnungen(): any{
    let data = {
   "VPNRV":""
      
    };
    let verordnungen=this.http.post('http://localhost:8080/???',data).map(response => response.json() as any);//RICHTIG LINK NOCH
    return verordnungen;
  }
}

