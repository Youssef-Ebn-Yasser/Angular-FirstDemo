import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  isUserLogged:boolean =false;
constructor(private authService:UserAuthService){

}
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLog;
  }
  login(){
    this.authService.login("UserName","Password");
    this.isUserLogged = this.authService.isUserLog;

  }

  logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLog;
  }

}
