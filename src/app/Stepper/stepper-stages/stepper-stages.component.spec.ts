import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStagesComponent } from './stepper-stages.component';

describe('StepperStagesComponent', () => {
  let component: StepperStagesComponent;
  let fixture: ComponentFixture<StepperStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
