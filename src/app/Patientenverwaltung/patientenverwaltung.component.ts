import { Component, OnInit } from '@angular/core';
import { Sendung } from 'app/Sendung/sendung';
import { Verordnung } from 'app/Verordnung/verordnung';

import { Transfer } from 'app/Transfer';
import { GetTransfers } from 'app/Transfer.service'; //verwerfen

//import * as $ from 'jquery';
import { Patient } from "./Patient";

declare var $: any;

@Component({
  selector: 'app-patientenverwaltung',
  templateUrl: './patientenverwaltung.component.html',
  styleUrls: ['./patientenverwaltung.component.css'],
  providers: [GetTransfers]
})
export class PatientenverwaltungComponent implements OnInit {

  VOIDRow: number;
  transfers;

  constructor(Transferarr: GetTransfers) {
    this.transfers = Transferarr.getTransfers();
  }

  ngOnInit() {
  }

  Edit(VOID: number) { //für das Bearbeiten
    this.VOIDRow = VOID; //Verordnungsnummer
  }

  loescheVerordnung(VOID: number) {

  }
  /*savePatient() {
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

    /*getPatient(VOID: svNR){

      
    }*/
  
}
