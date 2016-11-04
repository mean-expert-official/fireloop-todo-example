import { Component } from '@angular/core';
import { Todo, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private title   : string = 'Todo app works!';
  private todo    : Todo   = new Todo();
  private todoRef : FireLoopRef<Todo>;

  constructor(private rt: RealTime) {
    this.todoRef = this.rt.FireLoop.ref<Todo>(Todo);
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
