import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  userData: Observable<firebase.User>;
  isLoggedIn:boolean = false;
  constructor(private angularFireAuth: AngularFireAuth, private router:Router) {
    
   }

   ngOnInit(){
    this.userData = this.angularFireAuth.authState;
   }

   /* Sign up */
  SignUp(email: string, password: string) {
    console.log(email)
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
      
  }  
}
