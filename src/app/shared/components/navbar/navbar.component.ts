import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NewUserModel } from 'src/app/core/models/newuser.model';

import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter;
  
  user!:NewUserModel;
  
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.getUserLogIn().subscribe(res => {
      this.user = res[0];
    })
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  logOut(){
    this._authService.logOutUser();
  }

}
