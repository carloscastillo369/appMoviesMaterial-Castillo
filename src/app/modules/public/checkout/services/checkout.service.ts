import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserOrderModel } from 'src/app/core/models/user-order.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/orders/";

  constructor(private http: HttpClient) { }

  saveOrder(order: UserOrderModel){
    return this.http.post<UserOrderModel>(this.urlAPI, order);
  }
}
