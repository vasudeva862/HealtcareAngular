import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { TestListForCustomerComponent } from './test-list-for-customer.component';



describe('TestListForCustomerComponent', () => {

  let component: TestListForCustomerComponent;

  let fixture: ComponentFixture<TestListForCustomerComponent>;



  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [ TestListForCustomerComponent ]

    })

    .compileComponents();

  }));



  beforeEach(() => {

    fixture = TestBed.createComponent(TestListForCustomerComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

});