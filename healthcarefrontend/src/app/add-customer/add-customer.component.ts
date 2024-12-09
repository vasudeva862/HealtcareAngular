import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';



@Component({

  selector: 'app-add-customer',

  templateUrl: './add-customer.component.html',

  styleUrls: ['./add-customer.component.css']

})

export class AddCustomerComponent implements OnInit {

  usr:Customer=new Customer();

  submitted=false;



  constructor(private service:CustomerService,private router:Router) { }



  ngOnInit(): void {

  }

   

  newProduct():void{

    this.submitted=false;

    this.usr=new Customer();

  }

  onSubmit(){

    console.log('on submit called')

    this.submitted=false;

    this.save();

  }
  save(){

    console.log('save called')

    this.service.addCustomer(this.usr).subscribe(

      data=>console.log(data),

      error=>console.log(error)

      );

      this.usr=new Customer();

      this.gotoList();

  }



  gotoList(){

    this.router.navigate(['customer',this.usr.id]);

  }

  goHome(){

    this.router.navigate(['home']);

  }

  goCustomer(){

    this.router.navigate(['customer']);

  }

  goAddCustomer(){

    this.router.navigate(['addCustomer']);

  }
  goAdmin(){
    this.router.navigate(['admin'])
  }
  goAddAdmin(){
    this.router.navigate(['addamin'])
  }

  goAddDiagonasticCentre(){
    this.router.navigate(['adddiagnosticcenter'])
  }
  showAllTests()
  {
    this.router.navigate(['alltest'])
  }


}