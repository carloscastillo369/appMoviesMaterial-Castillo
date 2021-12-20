import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  user!:UserModel

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor(private _usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this._usersService.getUser(params.id).subscribe((res: UserModel) => (this.user = res));
    })
  }

}
