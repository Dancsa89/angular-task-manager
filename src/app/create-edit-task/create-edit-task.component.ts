import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

  @Input('model') appModel: AppModel;

  @Output('save') showModelValue = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  public showAppModelValue() {
    this.showModelValue.emit(Object.assign({}, this.appModel));
  }
  changeCOlor(category: string): string {
    if (category === 'Kaja') {
      return 'red';
    } else if (category === 'Pia') {
      return 'green';
    } else if (category === 'Nők') {
      return 'blue';
    }
  }

}
