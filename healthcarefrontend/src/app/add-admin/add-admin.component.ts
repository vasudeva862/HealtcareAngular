import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin/admin';
import { Router } from '@angular/router';



@Component({

  selector: 'app-add-admin',

  templateUrl: './add-admin.component.html',

  styleUrls: ['./add-admin.component.css']

})

export class AddAdminComponent implements OnInit {

  usr: Admin = new Admin();

  submitted = false;



  constructor(private service: AdminService, private router: Router) { }



  ngOnInit(): void {
    
     
    
  }

  onsubmit():void{
    console.log(this.usr);
    localStorage.setItem('adminData', JSON.stringify(this.usr));
    
    const data=localStorage.getItem('adminData') || {}
    console.log(data, '-- this is data from Local storage');
    

    
    
  }
  




  newProduct(): void {

    this.submitted = false;

    this.usr = new Admin();

  }

  onSubmit() {

    console.log('on submit called')

    this.submitted = false;

    this.save();

  }
  save() {

    console.log('save called')

    this.service.addAdmin(this.usr).subscribe(

      data => console.log(data),

      error => console.log(error)

    );

    this.usr = new Admin();

    this.gotoList();

  }



  gotoList() {

    this.router.navigate(['admin']);
    //console.log(this.gotoList)

  }
  goLogout(){
    this.router.navigate(['lagout']);
  }

  goHome() {

    this.router.navigate(['home']);
    //console.log(this.goHome)

  }

  goAdmin() {

    this.router.navigate(['admin']);
    //console.log(this.goAdmin)

  }

  goAddAdmin() {

    this.router.navigate(['addAdmin']);
    //console.log(this.goAddAdmin)

  }
  goAppointments() {

    this.router.navigate(['myappointments']);
    //console.log(this.myappointement)
  }



showAllTests() {

  this.router.navigate(['mytest']);
  //console.log(this.mytest)
  
}
goAddDiagonasticCentre(){

  this.router.navigate(['adddiagnosticcentre'])
}
goCreateAppointment(){
  this.router.navigate(['createappointment'])
}
}
