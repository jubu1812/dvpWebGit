import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from "../patientendaten.service";
import { Verordnung } from 'app/Verordnung/Verordnung';
import { IMyDpOptions } from 'mydatepicker';
import { Diagnose } from "./Diagnose";
import { Leistung } from "./Leistung";
import { Leistungserbringer } from "./Leistungserbringer";
import { Bewilligung } from "./Bewilligung";


declare var $: any;

@Component({
  selector: 'app-verordnungen',
  templateUrl: './verordnungen.component.html',
  styleUrls: ['./verordnungen.component.css'],
  providers: []
})
export class VerordnungenComponent implements OnInit {

  kostentraegerArray;
  
  currPatient;   
  vo_id: number = 0;


  diagnosen:Diagnose[];//4 Arrays erstellen, Verordnungskonstruktor Arrays rein
  leistungen:Leistung[];
  bewilligungen:Bewilligung[];
  leistungserbringer:Leistungserbringer[];
  
  constructor(private PatientendatenService: PatientendatenService) {
    this.currPatient = this.PatientendatenService.getCurrPatient();
    this.diagnosen = [];
    this.leistungen = [];
    this.bewilligungen = [];
    this.leistungserbringer = [];
  }

  ngOnInit() {
    this.PatientendatenService.getAlleKostentraeger().subscribe(data => {
      this.kostentraegerArray = data;
    });
  }
  
  public myDatePickerOptions: IMyDpOptions = {   
    dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
    monthLabels: { 1: "Jän", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
    dateFormat: "dd.mm.yyyy",
    todayBtnTxt: "Heute",
    firstDayOfWeek: "mo",
    sunHighlight: true,

  };
  public myDatePickerOptionsGr: IMyDpOptions = {
    dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
    monthLabels: { 1: "Jän", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
    dateFormat: "dd.mm.yyyy",
    todayBtnTxt: "Heute",
    firstDayOfWeek: "mo",
    sunHighlight: true,
    width: "45%"
  };

  diagnoseAlert() {
    $("#modalDiagose").modal();  
  }
  leistungenAlert() {
    $("#modalLeistungen").modal();
  }
  leistungserbringerAlert() {
    $("#modalLeistungserbringer").modal();
  }
  bewilligungAlert() {
    $("#modalBewilligung").modal();
  }

  saveVerordnung(){
    let vpnrv: string = $('#vpnrv').val().toString();
    let zunav: string = $('#zunav').val().toString();
    let vadatum: Date = $('#vadatum').val();
    let kostentraeger_id: number = parseInt($('#kostentraegerWidth').val());

    let verordnung = new Verordnung(this.PatientendatenService.getCurrKundennummer(), kostentraeger_id, vpnrv, zunav, vadatum, this.currPatient.vsnrp);
    this.PatientendatenService.createVerordnung(verordnung).subscribe(
      response =>{
        if(response!=null){
          this.vo_id = response;  
          console.log(this.vo_id+" "+response);
          this.saveArrays();         
        }
      }
    );      
  }

  saveArrays(){
    for(let i = 0; i<this.diagnosen.length; i++){
      this.diagnosen[i].vo_id = this.vo_id;
      console.log(this.diagnosen[i].vo_id);
      console.log(this.diagnosen[i]);
    }
    this.PatientendatenService.createDiagnosen(this.diagnosen);

    for(let i = 0; i<this.bewilligungen.length; i++){
      this.bewilligungen[i].vo_id = this.vo_id;
    }

    this.PatientendatenService.createBewilligungen(this.bewilligungen);

    for(let i = 0; i<this.leistungen.length; i++){
      this.leistungen[i].vo_id = this.vo_id;
    }
    
    this.PatientendatenService.createLeistungen(this.leistungen);

    //Leistungserbringer
  }

  saveDiagnose() {
    let datd: Date = $('#datd').val();
    let diagn: string = $('#diagn').val().toString();
    let diagnose = new Diagnose (datd,diagn);
    this.diagnosen.push(diagnose);
    this.leereDiagnose();
  }

  saveLeistung() {
     let datl: Date = $('#datl').val();
     let posnr: string = $('#posnr').val().toString();
     let anz: number  = $('#anz').val();
     let leistung = new Leistung (datl, posnr,anz);
     this.leistungen.push(leistung);
     this.leereLeistung();
  }

  /*saveLeistungserbringer() {
    let vpnrt: string = $('#vpnrt').val().toString();
    let zunt: string = $('#zunt').val().toString();
    let leistungserbringerVar= new Leistungserbringer (vpnrt, zunt);
    this.leistungserbringer.push(leistungserbringerVar);
    this.leereLeistungserbringer();
  }*/

  saveBewilligung() {
    let bewnr: string = $('#date').val();
    let bdat: Date = $('#bewnr').val();
    let bewilligung= new Bewilligung(bewnr, bdat);
    this.bewilligungen.push(bewilligung);
    this.leereBewilligung();
  }

  deleteDiagnose(d){
    this.diagnosen.splice(this.diagnosen.indexOf(d), 1);
  }

  deleteBewilligung(b){
    this.bewilligungen.splice(this.bewilligungen.indexOf(b), 1);
  }

  deleteLeistung(l){
    this.leistungen.splice(this.leistungen.indexOf(l), 1);
  }

  leereDiagnose(){
    $('#datd').val("");
    $('#diagn').val("");
  }
  leereBewilligung(){
    $('#bewnr').val("");
    $('#date').val("");
  }
  leereLeistung(){
    $('#datl').val("");
    $('#posnr').val("");
    $('#posnr').val("");
  }
  /*leereLeistungserbringer(){
    $('#vpnrt').val("");
    $('#zunt').val("");
  }*/


  
}