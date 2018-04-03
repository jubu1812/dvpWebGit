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
  providers: []
})
export class PatientenverwaltungComponent implements OnInit {

  VOIDRow: number;
  currPatient: Patient;
  currSVNRP: string;
  currKundennummer: number;

  patientGeladen: boolean = true;

  constructor(public service: PatientendatenService) {
  }

  ngOnInit() {
    this.currKundennummer = this.service.getCurrKundennummer();
  }

  Edit(VOID: number) { //für das Bearbeiten
    this.VOIDRow = VOID; //Verordnungsnummer
  }

  loescheVerordnung(VOID: number) {

  }
  savePatient() { //todo: bereitsgeladen sichern

    let vsnr = $('#VSNRP').val().toString();
    if (vsnr !== "") {
      vsnr = parseInt(vsnr);
    }
    else {
      vsnr = 0;
    }

    let vornap: string = $('#VONAP').val().toString();
    let zunap: string = $('#ZUNAP').val().toString();
    let stra: string = $('#STRA').val().toString();

    let plzl = $('#PLZL').val().toString();
    if (plzl !== "") {
      plzl = parseInt(plzl);
    }
    else {
      plzl = 0;
    }

    let ort: string = $('#ORT').val().toString();
    let land: string = $('#LAND').val().toString();

    let vsnra = $('#VSNRA').val().toString();
    if (vsnra !== "") {
      vsnra = parseInt(vsnra);
    }
    else {
      vsnra = 0;
    }

    let vonvs: string = $('#VONVS').val().toString();
    let zunvs: string = $('#ZUNVS').val().toString();

    let patient = new Patient(new PatientId(this.currKundennummer, vsnr), vornap, zunap, stra, plzl, ort, land, -1, vsnra, vonvs, zunvs);

    console.log(JSON.stringify(patient));

    this.service.createPatient(patient);
    this.service.setCurrPatient(patient);
    this.currPatient = patient;
  }

  getPatient() {
    this.service.getPatientById(new PatientId(this.currKundennummer, parseInt(this.currSVNRP))).subscribe(
      response => {
        if (response != null) {
          this.currPatient = response;
          this.service.setCurrPatient(this.currPatient);

          console.log(this.currPatient);

          this.patientGeladen = true;
          this.insertLoadedPatient();
        }
        else {
          this.patientGeladen = false;
          $("#myModal").modal();
        }
      }
    );


  }

  insertLoadedPatient() {
    $("#VONAP").val(this.currPatient.vonap);
    $("#ZUNAP").val(this.currPatient.zunap);
    $("#STRA").val(this.currPatient.stra);
    if (this.currPatient.plzl !== 0) {
      $("#PLZL").val("" + this.currPatient.plzl);
    }
    else {
      $("#PLZL").val("");
    }
    $("#ORT").val(this.currPatient.ort);
    $("#LAND").val(this.currPatient.land);
    if (this.currPatient.vsnra !== 0) {
      $("#VSNRA").val("" + this.currPatient.vsnra);
    }
    else {
      $("#VSNRA").val("");
    }
    $("#VONVS").val(this.currPatient.vonvs);
    $("#ZUNVS").val(this.currPatient.zunvs);
    
  }

  clearValues(){
    $("#VSNRP").val("");
    $("#VONAP").val("");
    $("#ZUNAP").val("");
    $("#STRA").val("");    
    $("#PLZL").val("");    
    $("#ORT").val("");
    $("#LAND").val("");
    $("#VSNRA").val("");   
    $("#VONVS").val("");
    $("#ZUNVS").val("");

    this.service.setCurrPatient(null);
    this.currPatient = null;
    
    console.log(this.service.getCurrPatient());
  }

  /*toggle() {
    let control = this.myForm.get('name')
    control.disabled ? control.enable() : control.disable();
  }*/

}
