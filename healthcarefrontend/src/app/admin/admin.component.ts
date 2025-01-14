import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

import { Admin } from './admin';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import {CustomerService} from '../customer.service';

import { Customer } from '../customer';



@Component({

  selector: 'app-admin',

  templateUrl: './admin.component.html',

  styleUrls: ['./admin.component.css']

})

export class AdminComponent implements OnInit {

  admin!: Observable<Admin[]>;

  usr1= new Admin();

  customer!: Observable<Customer[]>;

  usr2= new Customer();



  customer_data!: string[];



  constructor(private service1: AdminService,

    private service2: CustomerService,

     private router: Router) {

  }
  ngOnInit(): void {

    this.reloadData();

  }

  

  reloadData() {

    this.admin = this.service1.getAdminList();

    this.customer = this.service2.getCustomerList();

  }

  deleteAdmin(id: Number) {

    this.service1.deleteAdmin(id)

      .subscribe(

        data => {

          console.log(data);

          this.reloadData();

        },

        error => console.log(error)

      );

  }

  deleteCustomer(id: number) {

    this.service2.deleteCustomer(id)

    .subscribe(

      data => {

        console.log(data);

        this.reloadData();

      },

      error => console.log(error)

    );

  }



  updateAdmin(id: Number) {

    this.router.navigate(['adminUpdate', id]);

  }
  detailsAdmin(id: Number) {

    this.router.navigate(['adminDetails', id]);

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
    this.router.navigate(['home'])
  }
  goCreateAppointment(){
    this.router.navigate(['myappointment'])
  }

}