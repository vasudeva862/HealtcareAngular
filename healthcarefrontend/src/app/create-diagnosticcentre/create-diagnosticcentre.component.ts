import { Component, OnInit, Input } from '@angular/core';

import { MyDiagnosticCentre } from '../mydiagnosticcentre/mydiagnosticcentre';

import { MydiagnosticcentreService } from '../mydiagnosticcentre/mydiagnosticcentre.service';

import { Router } from '@angular/router';

import { ValidationErrors } from '@angular/forms';



@Component({

  selector: 'app-create-diagnosticcentre',

  templateUrl: './create-diagnosticcentre.component.html',

  styleUrls: ['./create-diagnosticcentre.component.css']

})

export class CreateDiagnosticcentreComponent implements OnInit {

  diagnosticCentre: MyDiagnosticCentre=new MyDiagnosticCentre();

  submitted=false;

  disable=true;

  @Input() errors!: ValidationErrors;
 constructor(private service: MydiagnosticcentreService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }
  save(){
    this.service.saveDiagnosticCentre(this.diagnosticCentre).subscribe(
      data=>console.log(data), error=>console.log(error));
      this.diagnosticCentre=new MyDiagnosticCentre();
      this.gotoList();
  }
  gotoList() {
    this.router.navigate(['mydiagnosticCentre']);
  }
goHome() {

  this.router.navigate(['home']);

}

goAdmin() {

  this.router.navigate(['admin']);

}

goAddAdmin() {

  this.router.navigate(['addAdmin']);

}

goCustomer() {

  this.router.navigate(['customer']);

}

goAddCustomer() {

  this.router.navigate(['addCustomer']);

}

updateCustomer(id: Number) {

  this.router.navigate(['updatecustomer', id]);

}

detailsCustomer(id: Number) {

  this.router.navigate(['customerDetails', id]);

}

goAddAppointment(){

  this.router.navigate(['myappointment']);

}

goAppointments(){

  this.router.navigate(['allappointment']);

}



goAddTest(){

  this.router.navigate(['addtest']);

}

goAddDiagonasticCentre(){

  this.router.navigate(['adddiagnosticcentre']);

}

showAllTests(){

  this.router.navigate(['mytest']);

}
goLogout(){
  this.router.navigate(['home']);
}
goCreateAppointment(){
  this.router.navigate(['createappointment'])
}

}


