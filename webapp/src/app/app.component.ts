require('chart.js');

import { Component } from '@angular/core';
import { Todo, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private title   : string = 'Todo app works!';
  private todo    : Todo   = new Todo();
  private todos   : Todo[] = new Array<Todo>();
  private todoRef : FireLoopRef<Todo>;
  private lineChartData:Array<any> = [];
  private lineChartLabels:Array<any> = [];
  private lineChartOptions:any = {
    animation: false,
    responsive: false
  };
  private lineChartColors:Array<any> = [
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  private lineChartLegend:boolean = true;
  private lineChartType:string = 'line';

  constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
      this.todoRef = this.rt.FireLoop.ref<Todo>(Todo);
      this.todoRef.on('change').subscribe((todos: Todo[]) => this.todos = todos);
      this.todoRef.stats().subscribe((stats: any) => {
        this.lineChartLabels = new Array();
        this.lineChartData   = new Array();
        let data = new Array();
        stats.forEach((stat: any) => {
          data.push(stat.count);
          this.lineChartLabels.push(moment(stat.universal).format('MM-YYYY'));
        });
        this.lineChartData.push({ data: data, label: 'Number of Dued Todos'});
      });
    });
  }

  create(): void {
    this.todoRef.create(this.todo).subscribe(() => this.todo = new Todo());
  }

  update(todo: Todo): void {
    this.todoRef.upsert(todo).subscribe();
  }

  remove(todo: Todo): void {
    this.todoRef.remove(todo).subscribe();
  }
}