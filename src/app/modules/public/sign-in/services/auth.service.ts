import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = [];
  $user = new BehaviorSubject<any>([]);

  constructor() { }

  getUserLogIn(){
    return this.$user.asObservable();
  }

  logInUser(user:any){
    this.user = user;
    this.$user.next(this.user);
  }

  logOutUser(){
    this.user = [];
    this.$user.next(this.user);
  }
}
