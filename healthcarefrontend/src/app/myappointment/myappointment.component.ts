
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAppointment } from './myappointment';
import { MyappointmentService } from './myappointment.service';
import { Router } from '@angular/router';
import { MyDiagnosticCentre } from '../mydiagnosticcentre/mydiagnosticcentre';
import { MydiagnosticcentreService } from '../mydiagnosticcentre/mydiagnosticcentre.service';

@Component({
  selector: 'app-myappointment',
  templateUrl: './myappointment.component.html',
  styleUrls: ['./myappointment.component.css']
})
export class MyappointmentComponent implements OnInit {
  appointment!:Observable<MyAppointment[]>
  diagnosticCentre!: Observable<MyDiagnosticCentre[]>
  name="";
  constructor(private service: MyappointmentService, private service2: MydiagnosticcentreService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

reloadData(){

    this.appointment=this.service.getAppointmentList();

    this.diagnosticCentre=this.service2.getDiagnosticCentreList();

    //this.name=this.service.getDiagnosticCentreName(this.appointment[0].diagnosticCentreId);

  }

  deleteAppointment(id: Number){

    this.service.removeAppointment(id).subscribe(

      data=>{

        console.log(data);

        this.reloadData();

      },

      error=>console.log(error)

    );

  }



  updateAppointment(id: Number){

    this.router.navigate(['updateAppointment',id]);



  }

  getDiagnosticCentreNameFromId(id: Number){

    this.service.getDiagnosticCentreName(id).subscribe(

      data=>{

        this.name=data;

      },

      error=>console.log(error)

    );

  }

}