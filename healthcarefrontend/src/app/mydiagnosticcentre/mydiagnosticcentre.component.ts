import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MyDiagnosticCentre } from './mydiagnosticcentre';

import { MydiagnosticcentreService } from './mydiagnosticcentre.service';

import { Router } from '@angular/router';

import { MyTest } from '../mytest/mytest';



@Component({

  selector: 'app-mydiagnosticcentre',

  templateUrl: './mydiagnosticcentre.component.html',

  styleUrls: ['./mydiagnosticcentre.component.css']

})

export class MydiagnosticcentreComponent implements OnInit {

  diagnosticCentre!:Observable<MyDiagnosticCentre[]>

  test!: MyTest;

  constructor(private service: MydiagnosticcentreService, private router: Router) { }



  ngOnInit(): void {

    this.reloadData();

  }

  reloadData(){

    this.diagnosticCentre=this.service.getDiagnosticCentreList();

  }
  deleteDiagnosticCentre(id: Number){

    this.service.removeDiagnosticCentre(id).subscribe(

      data=>{

        console.log(data);

        this.reloadData();

      },

      error=>console.log(error)

    );

  }



  diagnosticCentreDetail(id: Number){

    this.router.navigate(['diagnosticcentredetail',id]);



  }



  updateDiagnosticCentre(id: Number){

    this.router.navigate(['updatediagnosticCentre',id]);



  }

  addTestIntoExistingDiagnosticCentre(id: Number){

    this.router.navigate(['addTestInCentre',id]);

  }

}