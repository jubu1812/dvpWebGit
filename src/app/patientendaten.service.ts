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
import { Leistungserbringer } from './Verordnung/Leistungserbringer';
import { Sendung } from 'app/Sendung/sendung';

@Injectable()
export class PatientendatenService {
  constructor(private http: Http) { }//vorher leerer Konstruktor

  private currPatient: Patient;
  private currKundennummer: number = 123;
  private currVid: number;
  private verordnungZurueckStatus: boolean=false;
  private editModeVerordnung: boolean = false;

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
    console.log(patient.vsnrp);
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

  createLeistungserbringer(leistungserbringer:Leistungserbringer[]){
    this.http.post('http://localhost:8080/createLeistungserbringer', leistungserbringer).subscribe();
  }

  createSendung(sendung:Sendung){
    var erfolg = this.http.post('http://localhost:8080/createSendung',sendung).map(x => (x.text() ? x.json() : null) as any);
    return erfolg;
  }

  getPatientById(vsnrp:number) {
    var id:PatientId = new PatientId(this.currKundennummer, vsnrp);
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

  getVerordnungenByPeriode(periode: String){        
    var container = {
      "periode":periode,
      "kundennummer":this.currKundennummer    
    }

    let verordnungen = this.http.post('http://localhost:8080/getVerordnungenByPeriodeAndKundennummer', container).map(response => response.json() as any);
    return verordnungen;    
  }

  setKostentraeger_id(kostentraeger_id, vsnrp){
    var container = {
      "kostentraeger_id":kostentraeger_id,
      "kundennummer":this.currKundennummer,
      "vsnrp":vsnrp
    }
    this.http.post('http://localhost:8080/setKostentraeger_id', container).subscribe();
  }

  deleteVerordnung(vid:number){
    var container = {
      "vid":vid,
      "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/deleteVerordnung', container).map(response => response.json() as any);
  }

  
  getPeriodenByKundennummer(){
    var container={
       "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/getPeriodenByKundennummer',container).map(response => response.json() as any);;
  }

  getOffenePerioden(){
    var container={
       "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/getOffenePerioden',container).map(response => response.json() as any);;
  }

  getSendung(periode:string){
    var container={
      "periode":periode,
      "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/getSendung',container).map(response => response.json() as any);;
  }

  getVerordnungContainer(vid:number){
    console.log("vid to get "+vid);
    var container = {
      "vid":vid,
      "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/getVerordnungContainer', container).map(response => response.json() as any);
  }

  completeSendung(periode:String){
    var container = {
      "periode":periode,
      "kundennummer":this.currKundennummer
    }
    return this.http.post('http://localhost:8080/completeSendung', container).map(response => response.json() as any);
  }

  setPeriode(vid:number, periode:string){
    var container = {
      "vid":vid,
      "kundennummer":this.currKundennummer,
      "periode":periode
    }
    return this.http.post('http://localhost:8080/setPeriode', container).map(response => response.json() as any);
  }

  setverordnungZurueckStatus(status:boolean){
    this.verordnungZurueckStatus=status;
  }
  getverordnungZurueckStatus(){
    return this.verordnungZurueckStatus;
  }

  setEditModeVerordnung(status:boolean){
    this.editModeVerordnung = status;
  }

  getEditModeVerordnung(){
    return this.editModeVerordnung;
  }

  setCurrVid(vid:number){
    this.currVid = vid;
  }

  getCurrVid(){
    return this.currVid;
  }
}


