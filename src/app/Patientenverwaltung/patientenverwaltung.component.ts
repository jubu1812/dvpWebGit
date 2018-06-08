import { Component, OnInit } from '@angular/core';
import { Sendung } from 'app/Sendung/sendung';
import { Verordnung } from 'app/Verordnung/verordnung';
import { PatientendatenService } from "app/patientendaten.service";

//import * as $ from 'jquery';
import { Patient } from "./Patient";
import { Http } from '@angular/http';
import { PatientId } from 'app/Patientenverwaltung/PatientId';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-patientenverwaltung',
  templateUrl: './patientenverwaltung.component.html',
  styleUrls: ['./patientenverwaltung.component.css'],
  providers: []
})
export class PatientenverwaltungComponent implements OnInit {

  currPatient: Patient;
  currSVNRP: string;
  currKundennummer: number;

  patientGeladen: boolean = true;

  verordnungen: Verordnung[];
  offeneSendungen: Sendung[];

  constructor(public service: PatientendatenService, public router: Router) {
    this.verordnungen = [];
    if (this.service.getverordnungZurueckStatus()) {
      
      this.getPatient();
      this.service.setverordnungZurueckStatus(false);
    }

    this.service.setEditModeVerordnung(false);
  
  }

  ngOnInit() {
    this.currKundennummer = this.service.getCurrKundennummer();
  }


  savePatient() {

    let vsnr = $('#VSNRP').val().toString();
    let vornap: string = $('#VONAP').val().toString();
    let zunap: string = $('#ZUNAP').val().toString();
    let stra: string = $('#STRA').val().toString();
    let plzl = $('#PLZL').val().toString();
    let ort: string = $('#ORT').val().toString();
    let land: string = $('#LAND').val().toString();
    let vsnra = $('#VSNRA').val().toString();
    let vonvs: string = $('#VONVS').val().toString();
    let zunvs: string = $('#ZUNVS').val().toString();

    if (vsnr !== "") {
      vsnr = parseInt(vsnr);
    }
    else if (vsnr === "") {
      return false;
    }

    if (zunap === "") {
      return false;
    }

    if (plzl !== "") {
      plzl = parseInt(plzl);
    }
    else {
      plzl = 0;
    }

    if (vsnra !== "") {
      vsnra = parseInt(vsnra);
    }
    else {
      vsnra = 0;
    }

    let koId = 0;

    if (typeof this.currPatient !== 'undefined' && this.currPatient != null) {
      koId = this.currPatient.kostentraeger_id;
    }

    let patient = new Patient(vsnr, this.currKundennummer, vornap,
      zunap, stra, plzl, ort, land, koId, vsnra, vonvs, zunvs);

    console.log(JSON.stringify(patient));

    this.service.createPatient(patient);
    this.service.setCurrPatient(patient);
    this.currPatient = patient;

    return true;
  }

  getPatient() {
    var getVSNRP:number;

    if(this.service.getverordnungZurueckStatus()){
      getVSNRP = this.service.getCurrPatient().vsnrp;
    }
    else{
      getVSNRP = parseInt(this.currSVNRP);
    }

    this.service.getPatientById(getVSNRP).subscribe(
      response => {
        if (response != null) {
          this.currPatient = response;
          this.service.setCurrPatient(this.currPatient);

          console.log(this.currPatient);

          this.patientGeladen = true;
          this.getVerordnungenByPatientId();
          this.getOffenePerioden();
          this.insertLoadedPatient();          
        }
        else {
          this.patientGeladen = false;
          $("#myModal").modal();
        }
      }
    );
  }

  openVerordnung() {
    if (this.savePatient()) {
      this.router.navigate(['./verordnung']);
    }
    else {
      $("#modalInputleer").modal();
    }
  }

  onlySavePatient() {
    if (!this.savePatient()) {
      $("#modalInputleer").modal();
    }
  }

  getVerordnungenByPatientId() {
    this.service.getVerordnungenByPatientId(this.currPatient.vsnrp).subscribe(
      response => {
        if (response != null) {
          this.verordnungen = response;
        }
      }
    );
  }

  getOffenePerioden(){
    this.service.getOffenePerioden().subscribe(
      response => {
        if (response != null) {
          this.offeneSendungen = response;
        }
      }
    );;
  }

  onChangePeriode(vid:number, periode:string){
    //console.log('Periode'+periode);
    this.service.setPeriode(vid, periode).subscribe();
  }

  deleteVerordnung(vid: number) {
    this.service.deleteVerordnung(vid).subscribe(
      response => {
        if (response != null) {
          this.getVerordnungenByPatientId();
        }
      }
    );
  }

  editVerordnung(vid: number){
    this.service.setEditModeVerordnung(true);
    this.service.setCurrVid(vid);
    this.router.navigate(['/verordnung']);
  }

  insertLoadedPatient() {
    $("#VSNRP").val(this.currPatient.vsnrp);
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

  clearValues() {
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
    this.currSVNRP = null;
    this.verordnungen = [];

    console.log(this.service.getCurrPatient());
  }

}
