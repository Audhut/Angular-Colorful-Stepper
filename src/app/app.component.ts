import { Component, OnInit } from '@angular/core';
import { Stage } from './model/Stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular-Colorful-Stepper';

  stages!: Stage[];
  selectedStage!: Stage;

  ngOnInit(): void {

    this.stages = [
      {
        id: '123',
        name: 'Stage 1',
        data: '',
        class: 'completed',
        order: 1
      },
      {
        id: '456',
        name: 'Stage 2',
        data: '',
        class: 'inprogress',
        order: 2
      }
      ,
      {
        id: '789',
        name: 'Stage 3',
        data: '',
        class: 'unavailable',
        order: 3
      }
      ,
      {
        id: '101112',
        name: 'Stage 4',
        data: '',
        class: '',
        order: 4
      }
      ,
      {
        id: '101112',
        name: 'Stage 5',
        data: '',
        class: '',
        order: 5
      }
    ]
  }

  selectedStageClick(selectedStage: Stage): void {
    this.selectedStage = selectedStage;
    console.log(selectedStage);

  }




}
