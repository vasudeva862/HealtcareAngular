
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticcentreDetailsComponent } from './diagnosticcentre-details.component';

describe('DiagnosticcentreDetailsComponent', () => {
  let component: DiagnosticcentreDetailsComponent;
  let fixture: ComponentFixture<DiagnosticcentreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticcentreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticcentreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

