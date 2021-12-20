import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUserModel } from 'src/app/core/models/newuser.model';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/users/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.urlAPI);
  }

  getUser(id:string): Observable<UserModel>{
    return this.http.get<UserModel>(this.urlAPI + id);
  }

  saveUser(user: NewUserModel){
    return this.http.post<NewUserModel>(this.urlAPI, user);
  }

  updateUser(user: UserModel, id: string){
    return this.http.put<UserModel>(this.urlAPI + id, user);
  }

  deleteUser(id: string){
    return this.http.delete<UserModel>(this.urlAPI + id);
  }
}
