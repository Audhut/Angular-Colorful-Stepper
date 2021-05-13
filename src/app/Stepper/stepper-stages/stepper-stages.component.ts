import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stage } from 'src/app/model/Stage';

@Component({
  selector: 'app-stepper-stages',
  templateUrl: './stepper-stages.component.html',
  styleUrls: ['./stepper-stages.component.scss']
})
export class StepperStagesComponent implements OnInit,OnChanges {


  @Input()
  stage!: Stage;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
     
  }

  ngOnInit(): void {
  }

}
