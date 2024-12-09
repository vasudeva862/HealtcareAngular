import { Component, OnInit } from '@angular/core';

import { MyTest } from '../mytest/mytest';

import { MytestService } from '../mytest/mytest.service';

import { Router, ActivatedRoute } from '@angular/router';

import { MyDiagnosticCentre } from '../mydiagnosticcentre/mydiagnosticcentre';



@Component({

  selector: 'app-add-test-in-centre',

  templateUrl: './add-test-in-centre.component.html',

  styleUrls: ['./add-test-in-centre.component.css']

})

export class AddTestInCentreComponent implements OnInit {

  test: MyTest=new MyTest();

  id!: Number;

  diagnosticCentre!: MyDiagnosticCentre;

  submitted=false;

  constructor(private route: ActivatedRoute, private service: MytestService, private router: Router) { }



ngOnInit(): void {

    this.diagnosticCentre=new MyDiagnosticCentre();

    this.id=this.route.snapshot.params['id'];
}

onSubmit(){

  this.submitted=true;

  this.save(this.id);

}

save(_id: Number){

  this.service.addTestIntoExistingDiagnosticCentre(this.test, this.id).subscribe(

    data=>console.log(data), error=>console.log(error));

    this.test=new MyTest();

     this.gotoList();

}

gotoList() {

  this.router.navigate(['mydiagnosticCentre']);

}

}