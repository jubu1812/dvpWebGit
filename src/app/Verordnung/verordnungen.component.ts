import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from "../patientendaten.service";
import { Verordnung } from 'app/Verordnung/Verordnung';
import { IMyDpOptions } from 'mydatepicker';
import { Diagnose } from "./Diagnose";
import { Leistung } from "./Leistung";
import { Leistungserbringer } from "./Leistungserbringer";
import { Bewilligung } from "./Bewilligung";
import { VerordnungContainer } from './VerordnungContainer';
import { Sendung } from 'app/Sendung/sendung';
import { Router } from '@angular/router';

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
  vid: number = 0;

  offeneSendungen: Sendung[];

  vc: VerordnungContainer; 

  constructor(private PatientendatenService: PatientendatenService, private router: Router) {
    this.currPatient = this.PatientendatenService.getCurrPatient();
    this.getOffenePerioden();
    
    if(this.PatientendatenService.getEditModeVerordnung()){
      this.PatientendatenService.getVerordnungContainer(this.PatientendatenService.getCurrVid()).subscribe(data =>{
        this.vc = data;
        $('#vpnrv').val(""+this.vc.vo.vpnrv);
        $('#zunav').val(""+this.vc.vo.zunav);
        $('#vadatum').val(""+this.vc.vo.vdatum);
        console.log(this.vc);
      });
    }
    else{
      this.PatientendatenService.copyVerordnung(this.PatientendatenService.getCurrVid()).subscribe(data =>{
        if(data!=null){
        this.vc = data; 
        console.log("Verordnung "+data); 
        if(this.vc.vo===null){
          this.vc = new VerordnungContainer();

          this.vc.diagnosen = [];
          this.vc.bewilligungen = [];
          this.vc.leistungen = [];
          this.vc.leistungserbringer = [];
        }  
        else{
          this.vc.leistungen = [];
          $('#vpnrv').val(""+this.vc.vo.vpnrv);
          $('#zunav').val(""+this.vc.vo.zunav);
          $('#vadatum').val(""+this.vc.vo.vdatum);
        }           
        }
      });  
    }
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

  saveVerordnung() {
    let vpnrv: number =  parseInt($('#vpnrv').val());
    let zunav: string = $('#zunav').val().toString();
    let vadatum: Date = $('#vadatum').val();
    let kostentraeger_id: number = parseInt($('#kostentraegerWidth').val());
    
    let periode: string = $('#sendungSelector').val();

    if(periode == undefined || periode == null || periode == '' || periode == 'Kostenträger auswählen'){
      periode = 'Dummy';
    }

    let verordnung = new Verordnung(this.PatientendatenService.getCurrKundennummer(), kostentraeger_id, vpnrv, zunav, vadatum, this.currPatient.vsnrp,periode);

    if(this.PatientendatenService.getEditModeVerordnung()){
      verordnung.vid = this.vc.vo.vid;
      this.PatientendatenService.setEditModeVerordnung(false);
    }

    this.PatientendatenService.createVerordnung(verordnung).subscribe(
      response => {
        if (response != null) {
          this.vid = response;
          console.log(this.vid + " " + response);
          this.saveArrays();
          this.PatientendatenService.setKostentraeger_id(kostentraeger_id, this.currPatient.vsnrp);
          this.PatientendatenService.setCurrPatient(this.currPatient);
          this.PatientendatenService.setverordnungZurueckStatus(true);
          this.router.navigate(['/patient']);  
        }
      }
    );        
  }

  saveArrays() {
    for (let i = 0; i < this.vc.diagnosen.length; i++) {
      this.vc.diagnosen[i].vid = this.vid;
      console.log(this.vc.diagnosen[i].vid);
      console.log(this.vc.diagnosen[i]);
    }
    this.PatientendatenService.createDiagnosen(this.vc.diagnosen);

    for (let i = 0; i < this.vc.bewilligungen.length; i++) {
      this.vc.bewilligungen[i].vid = this.vid;
    }

    this.PatientendatenService.createBewilligungen(this.vc.bewilligungen);

    for (let i = 0; i < this.vc.leistungen.length; i++) {
      this.vc.leistungen[i].vid = this.vid;
    }

    this.PatientendatenService.createLeistungen(this.vc.leistungen);

    for (let i = 0; i < this.vc.leistungserbringer.length; i++) {
      this.vc.leistungserbringer[i].vid = this.vid;
    }

    this.PatientendatenService.createLeistungserbringer(this.vc.leistungserbringer);
    
  }

  

  saveDiagnose() {
    let datd: string = $('#datd').val();
    let diagn: string = $('#diagn').val().toString();

    if (datd == "" || diagn == "") {
      $("#modalInputleer").modal();
    }
    else {
      let diagnose = new Diagnose(new Date(datd), diagn);
      this.vc.diagnosen.push(diagnose);
    }
    this.leereDiagnose();
  }

  saveLeistung() {
    let datl: string = $('#datl').val();
    let posnr: string = $('#posnr').val().toString();
    let anz: number = $('#anz').val();
    console.log(anz);

    if (datl == "" || posnr == "" || anz == 0) {
      $("#modalInputleer").modal();
    }
    else {
      let leistung = new Leistung(new Date(datl), posnr, anz);
      this.vc.leistungen.push(leistung);
    }
    this.leereLeistung();
  }

  saveLeistungserbringer() {
    let vpnrt: string = $('#vpnrt').val().toString();
    let zunt: string = $('#zunt').val().toString();
    let leistungserbringerVar= new Leistungserbringer (vpnrt, zunt);
    this.vc.leistungserbringer.push(leistungserbringerVar);
    this.leereLeistungserbringer();
  }

  saveBewilligung() {
    let bdat: string = $('#bdat').val();
    let bewnr: string = $('#bewnr').val();
    if (bewnr == "" || bdat == "") {
      $("#modalInputleer").modal();
    }
    else {
      let bewilligung = new Bewilligung(bewnr, new Date(bdat));
      this.vc.bewilligungen.push(bewilligung);
    }
    this.leereBewilligung();
  }

  deleteDiagnose(d) {
    this.vc.diagnosen.splice(this.vc.diagnosen.indexOf(d), 1);
  }

  deleteBewilligung(b) {
    this.vc.bewilligungen.splice(this.vc.bewilligungen.indexOf(b), 1);
  }

  deleteLeistung(l) {
    this.vc.leistungen.splice(this.vc.leistungen.indexOf(l), 1);
  }

  leereDiagnose() {
    $('#datd').val("");
    $('#diagn').val("");
  }
  leereBewilligung() {
    $('#bewnr').val("");
    $('#bdat').val("");
  }
  leereLeistung() {
    $('#datl').val("");
    $('#posnr').val("");
    $('#anz').val("");
  }

  leereLeistungserbringer(){
    $('#vpnrt').val("");
    $('#zunt').val("");
  }

  getOffenePerioden(){
    this.PatientendatenService.getOffenePerioden().subscribe(
      response => {
        if (response != null) {
          this.offeneSendungen = response;
        }
      }
    );;
  }

}