import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGaurd implements CanActivate{
    constructor(private router: Router){}
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
        if(AuthenticationService.isAuthenticated()){
            return true
        }else{
            this.router.navigate(['/login'])
            return false
        }
    }
}
