import { Component, Input, OnInit } from '@angular/core';

import { OrderModel } from 'src/app/core/models/order.model';


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  @Input() orders!:OrderModel[];

  public displayedColumns: string[] = ['posicion','descripcion','tipo', 'cantidad', 'precio', 'subtotal'];

  constructor() { }

  ngOnInit(): void {
  }

}
