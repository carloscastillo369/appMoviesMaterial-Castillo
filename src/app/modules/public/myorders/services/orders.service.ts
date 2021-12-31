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

  getAllUsersOrders(): Observable<UserOrderModel[]>{
    return this.http.get<UserOrderModel[]>(this.urlAPI);
  }
  
}
