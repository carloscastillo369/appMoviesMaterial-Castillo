import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOrderModel } from 'src/app/core/models/user-order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  orders!:UserOrderModel;

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor(
    private _ordersService: OrdersService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this._ordersService.getUserOrders(params.id).subscribe(res => {
        this.orders = res;
      });
    })
  }

}
