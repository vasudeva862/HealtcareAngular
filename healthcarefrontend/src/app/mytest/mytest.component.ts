import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MyTest } from './mytest';

import { MytestService } from './mytest.service';

import { Router } from '@angular/router';



@Component({

  selector: 'app-mytest',

  templateUrl: './mytest.component.html',

  styleUrls: ['./mytest.component.css']

})

export class MytestComponent implements OnInit {

  test!: Observable<MyTest[]>;

  constructor(private service: MytestService, private router: Router) {

    //this.test=this.service.getProductList();

   }



  ngOnInit(): void {

    this.reloadData();

  }

  reloadData(){

    this.test=this.service.getTestList();

  }



  deleteTest(id: Number){

    this.service.removeTest(id).subscribe(

      data=>{

        console.log(data);

        this.reloadData();

      },

      error=>console.log(error)

    );

  }



  updateTest(id: Number){

    this.router.navigate(['updateTest',id]);




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
    
    



} 