import { Component, OnInit } from '@angular/core';
import { Sendung } from 'app/Sendung/sendung';
import { Verordnung } from 'app/Verordnung/verordnung';
import { PatientendatenService } from "app/patientendaten.service";
import { Transfer } from 'app/Transfer';

//import * as $ from 'jquery';
import { Patient } from "./Patient";
import { Http } from '@angular/http';
import { PatientId } from 'app/Patientenverwaltung/PatientId';

declare var $: any;

@Component({
  selector: 'app-patientenverwaltung',
  templateUrl: './patientenverwaltung.component.html',
  styleUrls: ['./patientenverwaltung.component.css'],
  providers: [PatientendatenService]
})
export class PatientenverwaltungComponent implements OnInit {

  VOIDRow: number;

  constructor(public service:PatientendatenService) {   
  }

  ngOnInit() {
  }

  Edit(VOID: number) { //für das Bearbeiten
    this.VOIDRow = VOID; //Verordnungsnummer
  }

  loescheVerordnung(VOID: number) {

  }
  savePatient() {
    let VSNR: number = parseInt($('#VSNRP').val().toString()); 
    let VONAP: string = $('#VONAP').val().toString();
    let ZUNAP: string = $('#ZUNAP').val().toString();
    let STRA: string = $('#STRA').val().toString();
    let PLZL: number = parseInt($('#PLZL').val().toString());   
    let ORT: string = $('#ORT').val().toString();
    let LAND: string = $('#LAND').val().toString();
    let VSNRA: number =  parseInt($('#VSNRA').val().toString()); 
    let VONVS: string = $('#VONVS').val().toString();
    let ZUNVS: string = $('#ZUNVS').val().toString();

    let patient= new Patient(new PatientId(123,VSNR),VONAP,ZUNAP,STRA,PLZL,ORT,LAND,2323,VSNRA,VONVS,ZUNVS);
    
    console.log(JSON.stringify(patient));

    this.service.createPatient(patient);
  }

    /*getPatient(VOID: svNR){

      
    }*/
  
}
