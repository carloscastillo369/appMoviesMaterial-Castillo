import { Component, OnInit } from '@angular/core';
import { UserOrderModel } from 'src/app/core/models/user-order.model';
import { OrdersService } from '../../services/orders.service';
import { UserRegisteredModel } from '../../../../../core/models/user-registered.model';
import { OrderModel } from 'src/app/core/models/order.model';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  users:any;

  displayedColumns: string[] = ['id','nombre', 'email', 'accion'];

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this._ordersService.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
      
    })
  }

}
