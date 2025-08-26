import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';



@Injectable({
  providedIn:'root'
})

export class authGaurd implements CanActivate {

  constructor(private authService:UserAuthService,
              private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.isUserLog == true) return true;
    else{
      alert("You must login first...")
      this.router.navigate(["/login"])
      return false;
    }

  }

}
