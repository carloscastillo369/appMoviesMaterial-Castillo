import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NewUserModel } from 'src/app/core/models/newuser.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:NewUserModel[] = [];
  user$ = new BehaviorSubject<NewUserModel[]>([]);

  constructor() { }

  getUserLogIn(){
    return this.user$.asObservable();
  }

  logInUser(user:NewUserModel[]){
    this.user = user;
    this.user$.next(this.user);
  }

  logOutUser(){
    this.user = [];
    this.user$.next(this.user);
  }
}
