/*import {Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import{UserManagementServices} from '../Services/user-management.service';

@Component({
    selector:'app-nav-bar',
    templateUrl:'./nav-bar.component.html',
    styleUrls:['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
    userRole!:boolean;
    constructor(private route:Router, private service : UserManagementServices){}
    isAdmin:any;

    ngOnInit(): void {
        this.isAdmin=localStorage.getItem('isaAdmin');
    }

    NavigateToUserDetails(){
        this.route.navigate(['./userdetails']);
    }
    NavigateToOrderDetails(){
        this.route.navigate(['./orderdetails']);
    }
    NavigateToLabDetails(){
        this.route.navigate(['./labdetails']);
    }
    navigateToLogin(){
        this.service.clearToken();
        this.service.clearAdminToken();
        this.route.navigate(['./login'])
    }
}*/
