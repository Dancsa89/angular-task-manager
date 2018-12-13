import { Component } from '@angular/core';
import { AppModel, AppInterface } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public appModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  constructor() {

  }

  public showAppModelValue() {
    console.log(this.appModel);
  }

  getColor(checked: boolean): string {
    if (checked) {
      return 'green';
    } else { 
      return 'red';
    }
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


