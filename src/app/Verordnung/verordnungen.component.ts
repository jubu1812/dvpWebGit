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
  vo_id: number=0;

  diagnosen:Diagnose[];//4 Arrays erstellen, Verordnungskonstruktor Arrays rein
  leistungen:Leistung[];
  bewilligungen:Bewilligung[];
  leistungserbringer:Leistungserbringer[];

  //verordnungenListe : Array<any>;
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
    // other options...
    dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
    monthLabels: { 1: "Jän", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
    dateFormat: "dd.mm.yyyy",
    todayBtnTxt: "Heute",
    firstDayOfWeek: "mo",
    sunHighlight: true,

  };
  public myDatePickerOptionsGr: IMyDpOptions = {
    // other options...
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

    let verordnung = new Verordnung(this.PatientendatenService.getCurrKundennummer(), kostentraeger_id, vpnrv, zunav, vadatum, this.currPatient.id.vsnrp);
    this.PatientendatenService.createVerordnung(verordnung).subscribe(
      response =>{
        if(response!=null){
          this.vo_id = response.vo_id;
        }
      }
    );   

    this.saveArrays();
  }

  saveArrays(){
    for(let i = 0; i<this.diagnosen.length; i++){
      this.diagnosen[i].vo_id = this.vo_id;
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
    let datd: Date = $('#datd').val(); //wieeee???
    let diagn: string = $('#diagn').val().toString();
    let diagnose = new Diagnose (datd,diagn);
    this.diagnosen.push(diagnose);
  }
  saveLeistungen() {
     let datl: Date = $('#datl').val();
     let posnr: string = $('#posnr').val().toString();
     let anz: number  = $('#anz').val();
     let leistung = new Leistung (datl, posnr,anz);
     this.leistungen.push(leistung);
  }

  /*saveLeistungserbringer() {
    let vpnrt: string = $('#vpnrt').val().toString();
    let zunt: string = $('#zunt').val().toString();
    let leistungserbringerVar= new Leistungserbringer (vpnrt, zunt);
    this.leistungserbringer.push(leistungserbringerVar);
  }*/

  saveBewilligung() {
    let bewnr: string = $('#date').val();
    let bdat: Date = $('#bewnr').val();
    let bewilligung= new Bewilligung(bewnr, bdat);
    this.bewilligungen.push(bewilligung);
  }

  
}