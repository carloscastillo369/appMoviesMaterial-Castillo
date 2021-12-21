import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  @Input() orders:any;

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor() { }

  ngOnInit(): void {
  }

}
