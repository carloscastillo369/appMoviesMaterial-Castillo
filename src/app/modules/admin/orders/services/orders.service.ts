import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOrderModel } from 'src/app/core/models/user-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/orders/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserOrderModel[]>{
    return this.http.get<UserOrderModel[]>(this.urlAPI);
  }

  getUserOrders(id:string): Observable<UserOrderModel>{
    return this.http.get<UserOrderModel>(this.urlAPI + id);
  }

  deleteOrder(id: string){
    return this.http.delete<UserOrderModel>(this.urlAPI + id);
  }
  
}
