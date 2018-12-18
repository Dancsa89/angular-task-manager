import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

  @Input('model') appModel: AppModel;

  constructor() { }

  ngOnInit() {
  }

  public showAppModelValue() {
    console.log(this.appModel);
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
