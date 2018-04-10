import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from "../patientendaten.service";
import { Verordnung } from 'app/Verordnung/Verordnung';
import { IMyDpOptions } from 'mydatepicker';

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
    width:"45%"
  };
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


/*public KUNDENNR:number,
public VOID: number,
public KOSTENTRAEGER:string,
public VPNRV: string,
public ZUNAV: string,
public VDATUM: Date,

public diagnosen: Array<Diagnose>,
public leistungen: Array<Leistung>,
public bewilligungen: Array<Bewilligung>,
public leistungserbringungen: Array<Leistungserbringung>*/