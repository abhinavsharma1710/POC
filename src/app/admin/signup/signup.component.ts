import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service'

export class User {
  name:string = null;
  email:string = null;
  password:string = null
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {
  }
  signUp(data){
    console.log(data)
    //let userInfo = data.form.value;
    this.loginServ.SignUp(data.email, data.password)
  }
}
