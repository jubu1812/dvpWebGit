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

  saveDiagnose() {
    let datd: Date = $('#date').val();
    let diagn: string = $('#diagn').val().toString();
    // let vo_id: ??;

    //let diagnose:new Diagnose (datd,diagn,vo_id);
  }
  saveLeistungen() {
     let datl: Date = $('#date').val();
     let posnr: string = $('#posnr').val().toString();
     let anz: number  = $('#anz').val();

    // let vo_id: ??;

    //let leistung:new Leistung (datd,diagn,vo_id);
  }

  saveLeistungserbringer() {
    let vpnrt: string = $('#vpnrt').val().toString();
    let zunt: string = $('#zunt').val().toString();

    // let leistungserbringer: new Leistungserbringer (datd, diagn, vo_id);
  }

  saveBewilligung() {
    let bewnr: string = $('#date').val();
    let bdat: Date = $('#date').val();
    // let vo_id: number

    //let bewilligung= new Bewilligung(bewnr, bdat, vo_id);
  }

  //verordnungenListe : Array<any>;
  constructor(private PatientendatenService: PatientendatenService) {
    this.currPatient = this.PatientendatenService.getCurrPatient();
  }

  ngOnInit() {
    this.PatientendatenService.getAlleKostentraeger().subscribe(data => {
      this.kostentraegerArray = data;
    });

  }

  /* getVerordungen(){    
        this.PatientendatenService.getAllVerordnungen().subscribe(
        data => {
          this.verordnungenListe = data;
        }
      )
    }*/
}


 /*getVerordnung(number svnr) {
    let VSNRP: number = parseInt($('#VSNRP').val().toString()); 
    let VONAP: string = $('#VONAP').val().toString();
    let ZUNAP: string = $('#ZUNAP').val().toString();
    let STRA: string = $('#STRA').val().toString();
    let PLZL: number = parseInt($('#PLZL').val().toString());   
    let ORT: string = $('#ORT').val().toString();
    let LAND: string = $('#LAND').val().toString();
    let VSNRA: number =  parseInt($('#VSNRA').val().toString()); 
    let VONVS: string = $('#VONVS').val().toString();
    let ZUNVS: string = $('#ZUNVS').val().toString();

    let patient= new Patient(123,VSNRP,VONAP,ZUNAP,STRA,PLZL,ORT,LAND,"blabla",VSNRA,VONVS,ZUNVS);

 }*/

