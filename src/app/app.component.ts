import { Component } from '@angular/core';
import { AppModel } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public appModel = new AppModel();

  constructor() {

  }

  public showAppModelValue() {
    console.log(this.appModel);
  }

  changeChecked(isChecked: Event) {
    this.appModel.checked = !!isChecked;
  }
}


