import { Component, OnInit } from '@angular/core';

import { MyDiagnosticCentre } from '../mydiagnosticcentre/mydiagnosticcentre';

import { ActivatedRoute, Router } from '@angular/router';

import { MydiagnosticcentreService } from '../mydiagnosticcentre/mydiagnosticcentre.service';

import { MyTest } from '../mytest/mytest';

import { MytestService } from '../mytest/mytest.service';

import { Observable } from 'rxjs';



@Component({

  selector: 'app-diagnosticcentre-details',

  templateUrl: './diagnosticcentre-details.component.html',

  styleUrls: ['./diagnosticcentre-details.component.css']

})

export class DiagnosticcentreDetailsComponent implements OnInit {

  id!:number;

  diagnosticCentre!:MyDiagnosticCentre;

  tests!: MyTest[];

  diagnosticCentreReload!: Observable<MyTest[]>

  constructor(private route: ActivatedRoute, private service2: MytestService, private service:MydiagnosticcentreService,private router:Router) { }
  ngOnInit(): void {

    this.diagnosticCentre=new MyDiagnosticCentre();

    this.id=this.route.snapshot.params['id'];

 

    this.service.searchDiagnosticCentre(this.id).subscribe(

      data=>{

        console.log(data)

        this.diagnosticCentre=data;

        this.tests=this.diagnosticCentre.setOfTests;

      },

      error=>console.log(error)

    );

  }



  reloadData(){

    this.diagnosticCentreReload=this.service.getAllTestsInDiagnosticCentre(this.id);

  }



  deleteTest(id: Number){

    this.service2.removeTest(id).subscribe(

      data=>{

        console.log(data);

        this.reloadData();

      },

      error=>console.log(error)

    );

  }

}