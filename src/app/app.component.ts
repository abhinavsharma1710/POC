import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'practiceApp';
  constructor( public loginServ: LoginService){

  }

  ngOnInit(){
    console.log(this.loginServ.userData)
  }
}
