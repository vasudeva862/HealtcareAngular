import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { AddTestInCentreComponent } from './add-test-in-centre.component';



describe('AddTestInCentreComponent', () => {

  let component: AddTestInCentreComponent;

  let fixture: ComponentFixture<AddTestInCentreComponent>;



  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [ AddTestInCentreComponent ]

    })

    .compileComponents();

  }));



  beforeEach(() => {

    fixture = TestBed.createComponent(AddTestInCentreComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
