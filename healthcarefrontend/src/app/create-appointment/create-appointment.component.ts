import { Component, OnInit, Input } from '@angular/core';

import { MyAppointment } from '../myappointment/myappointment';

import { MyappointmentService } from '../myappointment/myappointment.service';

import { Router } from '@angular/router';

import { MyDiagnosticCentre } from '../mydiagnosticcentre/mydiagnosticcentre';


import { MydiagnosticcentreService } from '../mydiagnosticcentre/mydiagnosticcentre.service';

import { MyTest } from '../mytest/mytest';

import { MytestService } from '../mytest/mytest.service';

import { NgForm } from '@angular/forms';


@Component({

  selector: 'app-create-appointment',

  templateUrl: './create-appointment.component.html',

  styleUrls: ['./create-appointment.component.css']

})

export class CreateAppointmentComponent implements OnInit {

  appointment: MyAppointment=new MyAppointment();

  diagnosticCentres!: MyDiagnosticCentre[];

  tests!: MyTest[];

  cost!: null;

  //selectedDiagnosticCentre=null;

  //selectedDeviceObj = this.diagnosticCentres;
 
submitted=false;
  constructor(private service: MyappointmentService, private service3: MytestService, private service2: MydiagnosticcentreService, private router: Router) { }

  ngOnInit(): void {
    //this.diagnosticCentre=new MyDiagnosticCentre();
    this.service2.getDiagnosticCentreList().subscribe(
      data=>{
        console.log(data)
        this.diagnosticCentres=data;
      },
      error=>console.log(error)
    );
  }

  // onChange(newValue) {
  //   console.log(newValue);
  //   this.selectedDevice = newValue;
  //   // ... do other stuff here ...
  // }
  // onChangeObj(newObj) {
  //   console.log(newObj);
  //   this.selectedDeviceObj = newObj;
  //   // ... do other stuff here ...
  // }
  onChangeDiagnosticCentre(newDiag: Number){ //changed
    console.log(newDiag);
    this.appointment.diagnosticCentreId = newDiag;
    this.service2.getAllTestsInDiagnosticCentre(this.appointment.diagnosticCentreId).subscribe(
      data=>{
        console.log(data)
        this.tests=data;
      },
      error=>console.log(error)
    );
  }

onChangeTest(newTest: Number){

    console.log(newTest);

    this.appointment.testId=newTest;

    this.service3.testCost(this.appointment.testId).subscribe(

      data=>{

        this.cost=data;

        this.appointment.totalCost=data;

      },

      error=>console.log(error)

    );

  }

// onChangeObj(newObj) {

//   console.log(newObj);

//   this.selectedDeviceObj = newObj;

//   // ... do other stuff here ...

// }

  // onSelect(diagnosticCentreId){

  //   this.service3.getTestList().subscribe(

  //     data=>{

  //       console.log(data);

  //       this.tests=data;

  //     },

  //     error=>console.log(error)

  //   )

  // }



  onSubmit(){

    this.submitted=true;

    this.save();

  }

  save(){

    this.service.saveAppointment(this.appointment).subscribe(

      data=>console.log(data), error=>console.log(error));

      this.appointment=new MyAppointment();

      this.gotoList();

  }

  gotoList() {

    this.router.navigate(['myappointment']);

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
  
  goCreateAppointment(){
  
    this.router.navigate(['myappointment']);
  
  }
  
  goAppointments(){
  
    this.router.navigate(['allappointment']);
  
  }
  goAddDiagonasticCentre(){

    this.router.navigate(['adddiagnosticcentre']);
  
  

}
showAllTests(){
    
  this.router.navigate(['mytest']);
}
goLogout(){
  this.router.navigate(['logout']);
}
}
