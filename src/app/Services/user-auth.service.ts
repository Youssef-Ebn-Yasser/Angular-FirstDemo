import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  private isLoggedSubject :BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject=new BehaviorSubject<boolean>(false);
  }


  login(userName:string,password:string){
    // call api then get token

    let useToken = '123456';
    localStorage.setItem("token",useToken);

    this.isLoggedSubject.next(true);
  }

  logout(){
    localStorage.removeItem("token")
    this.isLoggedSubject.next(false);
  }

  get isUserLog():boolean{
    return localStorage.getItem("token")? true : false;
  }

  get isUserLogSubject(): Observable<boolean>{
    // better and best practise no need for next and observer method
    return this.isLoggedSubject as Observable<boolean>;
  }
}
