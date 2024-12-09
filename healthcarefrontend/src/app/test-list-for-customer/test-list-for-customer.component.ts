import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MyTest } from '../mytest/mytest';

import { MytestService } from '../mytest/mytest.service';

import { Router } from '@angular/router';



@Component({

  selector: 'app-test-list-for-customer',

  templateUrl: './test-list-for-customer.component.html',

  styleUrls: ['./test-list-for-customer.component.css']

})

export class TestListForCustomerComponent implements OnInit {

  test!:Observable<MyTest[]>

  constructor(private service: MytestService, private router: Router) { }



  ngOnInit(): void {

    this.test=this.service.getTestList();

  }



}