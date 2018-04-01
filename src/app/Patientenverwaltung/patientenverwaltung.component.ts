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
  currPatient: Patient;
  currSVNRP: string;
  currKundennummer: number;

  patientGeladen:boolean = true;

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
    let vsnr: number = parseInt($('#VSNRP').val().toString()); 
    let vornap: string = $('#VONAP').val().toString();
    let zunap: string = $('#ZUNAP').val().toString();
    let stra: string = $('#STRA').val().toString();
    let plzl: number = parseInt($('#PLZL').val().toString());   
    let ort: string = $('#ORT').val().toString();
    let land: string = $('#LAND').val().toString();
    let vsnra: number =  parseInt($('#VSNRA').val().toString()); 
    let vonvs: string = $('#VONVS').val().toString();
    let zunvs: string = $('#ZUNVS').val().toString();

    let patient= new Patient(new PatientId(123,vsnr),vornap,zunap,stra,plzl,ort,land,0,vsnra,vonvs,zunvs);
    
    console.log(JSON.stringify(patient));

    this.service.createPatient(patient);
  }

  getPatient(){
    this.service.getPatientById(new PatientId(123, parseInt(this.currSVNRP))).subscribe(
      response => {
        if(response!=null){
        this.currPatient = response;
        this.service.setCurrPatient(this.currPatient); 
        console.log(this.currPatient);  
        this.patientGeladen = true;  
        this.insertLoadedPatient(); 
        }
        else{
          this.patientGeladen = false;
          $("#myModal").modal();
        }
      }
    );

    
  }

  insertLoadedPatient(){
    $("#ZUNAP").val(this.currPatient.zunap);        
  
}
  
}
