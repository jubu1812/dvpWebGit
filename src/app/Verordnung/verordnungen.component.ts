import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from "../patientendaten.service";

@Component({
  selector: 'app-verordnungen',
  templateUrl: './verordnungen.component.html',
  styleUrls: ['./verordnungen.component.css']
})
export class VerordnungenComponent implements OnInit {
  verordnungenListe : Array<any>;
  constructor(private PatientendatenService:PatientendatenService) {}

  ngOnInit() {
  this.getVerordungen;
  }

 getVerordungen(){    
      this.PatientendatenService.getAllVerordnungen().subscribe(
      data => {
        this.verordnungenListe = data;
      }
    )
  }
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