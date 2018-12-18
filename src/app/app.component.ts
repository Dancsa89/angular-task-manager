import { Component } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { SignUpModel } from './sign-up.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public appModel = new AppModel();

  public taskModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public fullnameInvalid = true;

  public emailInvalid = true;

  public passwordInvalid : 'RED' | 'ORANGE' | 'GREEN' = 'RED';

  public signUpModel: SignUpModel = new SignUpModel;
  
  constructor() {

  }

  public showAppModelValue(event: AppModel) {
    console.log(event);
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

  public signUp() {
    
  }

  public validateFullName(event: any) {
    if (!event.target.value) {
      this.fullnameInvalid = true;
      return;
    }
    const fullname = event.target.value;
    this.fullnameInvalid = !(fullname.charAt(0) === fullname.charAt(0).toUpperCase())
  }

  public validateEmail(event: any) {
    if (!event.target.value) {
      this.emailInvalid = true;
      return;
    }
    const email: string = event.target.value;
    this.emailInvalid = !email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/);
  }

  /* public validatePassword(event: any) {
    if (!event.target.value) {
      this.passwordInvalid = 'RED';
      return;
    }
    const password: string = event.target.value;
    if(password.match(/[a-z0-9]/g) && (password.length < 8)) {
      this.passwordInvalid = 'RED';
    } else if(password.match(/[a-zA-Z0-9]/g) && (password.length >= 8 || password.length < 14)) {
    this.passwordInvalid = 'ORANGE'; 
  } else if() {

  } */
 
}


