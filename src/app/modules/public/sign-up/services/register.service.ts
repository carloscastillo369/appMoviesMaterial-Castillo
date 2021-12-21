import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUserModel } from 'src/app/core/models/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/users/";

  constructor(private http: HttpClient) { }

  saveUser(user: NewUserModel){
    return this.http.post<NewUserModel>(this.urlAPI, user);
  }
  
}
