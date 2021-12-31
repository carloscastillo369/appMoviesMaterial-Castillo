import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NewUserModel } from 'src/app/core/models/newuser.model';

import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  user!:NewUserModel;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.getUserLogIn().subscribe(res => {
      this.user = res[0];
    })
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }

  logOut(){
    this._authService.logOutUser();
    this.onSidenavClose();
  }

}
