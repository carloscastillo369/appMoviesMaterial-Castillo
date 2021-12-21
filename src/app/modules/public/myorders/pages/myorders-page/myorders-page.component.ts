import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrderModel } from 'src/app/core/models/user-order.model';
import { AuthService } from '../../../sign-in/services/auth.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-myorders-page',
  templateUrl: './myorders-page.component.html',
  styleUrls: ['./myorders-page.component.css']
})
export class MyordersPageComponent implements OnInit {

  userOrders:UserOrderModel[] = [];

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor(
    private _ordersService: OrdersService,
    private _authService: AuthService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._authService.getUserLogIn().subscribe(user => {
      if(user.length > 0){
        this._ordersService.getAllUsersOrders().subscribe(res => {
          const finder = res.filter((i:any) => i.email == user[0].email);
          this.userOrders = finder;
        })
      } else {
        this._router.navigate(['/HomeMovie/movies'])
      }
    })
  }

}