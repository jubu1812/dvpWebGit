import { Injectable } from '@angular/core';
import { Patient } from "./Patientenverwaltung/Patient";
import { Http, Response, Request } from "@angular/http";
import 'rxjs/add/operator/map';
import { PatientId } from 'app/Patientenverwaltung/PatientId';
import { Verordnung } from './Verordnung/Verordnung';
import { Diagnose } from './Verordnung/Diagnose';
import { Bewilligung } from './Verordnung/Bewilligung';
import { Leistung } from './Verordnung/Leistung';
import { VerordnungsId } from './Verordnung/VerordnungId';

@Injectable()
export class PatientendatenService {
  constructor(private http: Http) { }//vorher leerer Konstruktor

  private currPatient: Patient;
  private currKundennummer: number = 123;

  getCurrPatient() {
    return this.currPatient;
  }

  setCurrPatient(newPat: Patient) {
    this.currPatient = newPat;
  }

  getCurrKundennummer() {
    return this.currKundennummer;
  }

  setCurrKundennummer(kundennummer: number) {
    this.currKundennummer = kundennummer;
  }

  createPatient(patient: Patient) {
    this.http.post('http://localhost:8080/createPatient', patient).subscribe();
    console.log(patient.id.vsnrp);
  }

  createVerordnung(verordnung: Verordnung){
    var currVerordnungId = this.http.post('http://localhost:8080/createVerordnung', verordnung).map(x => (x.text() ? x.json() : null) as any);
    return currVerordnungId;
  }

  createDiagnosen(diagnosen:Diagnose[]){
    this.http.post('http://localhost:8080/createDiagnosen', diagnosen).subscribe();
  }

  createBewilligungen(bewilligungen:Bewilligung[]){
    this.http.post('http://localhost:8080/createBewilligungen', bewilligungen).subscribe();
  }
  
  createLeistungen(leistungen:Leistung[]){
    this.http.post('http://localhost:8080/createLeistungen', leistungen).subscribe();
  }

  getPatientById(id: PatientId) {
    var currentPatient = this.http.post('http://localhost:8080/patientById', id).map(x => (x.text() ? x.json() : null) as any);
    return currentPatient;
  }

  getAlleKostentraeger() {
    let data = {};
    let kostentraeger = this.http.post('http://localhost:8080/alleKostentraeger', data).map(response => response.json() as any);
    return kostentraeger;
  }

  getVerordnungenByPatientId(svnrp: number){    
    let patientenId = new PatientId(this.currKundennummer, svnrp);
    let verordnungen = this.http.post('http://localhost:8080/getVerordnungenByVSNRP', patientenId).map(response => response.json() as any);
    return verordnungen;
  }

  getVerordnungenBySendungId(sendungId: number){        
    let patientenId = new PatientId(this.currKundennummer, sendungId);

    let verordnungen = this.http.post('http://localhost:8080/getVerordnungenBysendungid', patientenId).map(response => response.json() as any);
    return verordnungen;    
  }

}


