import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  isUserLogged :boolean =false;
  constructor(private userAuth:UserAuthService){
  }
  ngOnInit(): void {
    //this.isUserLogged = this.userAuth.isUserLog;

    this.userAuth.isUserLogSubject.subscribe(status=>{
      this.isUserLogged = status;
    });
  }
}
