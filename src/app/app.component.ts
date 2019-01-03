import { Component, TemplateRef } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { SignUpModel } from './sign-up.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

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
  
  public modalRef: BsModalRef;

  public tasks: AppModel[] = [];

  constructor(
    private modalService: BsModalService
  ) {
  }

  public showNewTask(modalContent: TemplateRef<any>) {
    this.taskModel = new AppModel();
    this.modalRef = this.modalService.show(modalContent);
  }

  public editlist(index: number, modalContent: TemplateRef<any>) {
    this.taskModel = this.tasks[index];
    this.modalRef = this.modalService.show(modalContent);
  }

  public showAppModelValue(event: AppModel) {
    this.modalRef.hide();
    this.tasks.push(event);
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

  public validatePassword(event: any) {
    if (!event.target.value) {
      this.passwordInvalid = 'RED';
      return;
    }
    const password: string = event.target.value;
    if(password.match(/[a-z0-9]/g) && (password.length < 8)) {
      this.passwordInvalid = 'RED';
    } else if(password.match(/[a-zA-Z0-9]/g) && (password.length >= 8 || password.length < 14)) {
    this.passwordInvalid = 'ORANGE'; 
  } else if (password.match(/[a-z]/g) &&
      password.match(/[0-9]/g) && password.match(/[A-Z]/g) &&
      password.match(/(\:|\.|\@|\!)/g) && password.length >= 14) {
      this.passwordInvalid = 'GREEN';
    }
  }
 
}


