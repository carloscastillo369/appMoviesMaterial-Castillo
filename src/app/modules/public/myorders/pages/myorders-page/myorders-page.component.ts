import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserOrderModel } from 'src/app/core/models/user-order.model';

import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';
import { OrdersService } from 'src/app/modules/public/myorders/services/orders.service';

@Component({
  selector: 'app-myorders-page',
  templateUrl: './myorders-page.component.html',
  styleUrls: ['./myorders-page.component.css']
})
export class MyordersPageComponent implements OnInit {

  public userOrders!:UserOrderModel[];

  constructor(
    private _ordersService: OrdersService,
    private _authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._authService.getUserLogIn().subscribe(user => {
      if(user.length > 0){
        this._ordersService.getAllUsersOrders().subscribe(res => {
          const finder = res.filter((i:any) => i.email == user[0].email);
          this.userOrders = finder;
        })
      } else {
        this.router.navigate(['/HomeMovie/movies'])
      }
    })
  }

}
