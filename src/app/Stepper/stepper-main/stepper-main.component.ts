import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Stage } from 'src/app/model/Stage';

@Component({
  selector: 'app-stepper-main',
  templateUrl: './stepper-main.component.html',
  styleUrls: ['./stepper-main.component.scss']
})
export class StepperMainComponent implements OnInit, OnChanges {

  selectedIndex = 1;

  stageWidth: number = 99;

  selectedItem = {
    borderColor: 'gray',
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: '10px',
    cursor: 'default'
  };

  @Output()
  stageSelected = new EventEmitter<Stage>();


  @Input()
  stages!: Stage[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.stages) {
      this.stageWidth = ((99 - this.stages.length) / this.stages.length);
    }
    console.log(this.stageWidth);
  }

  ngOnInit(): void {
  }


  public onClickStage(stage: Stage): void {
    this.stageSelected.emit(stage);
    this.selectedIndex = stage.order;
  }




}
