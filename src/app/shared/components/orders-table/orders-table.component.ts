import { Component, Input, OnInit } from '@angular/core';

import { OrderModel } from 'src/app/core/models/order.model';


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  @Input() orders!:OrderModel[];

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor() { }

  ngOnInit(): void {
  }

}
