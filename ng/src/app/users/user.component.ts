import {Component} from "@angular/core"
import { BaseComponent } from '../base.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';




@Component({
    selector: 'auth-el',
    templateUrl: './user.component.html'
})

export class UserComponent extends BaseComponent{
    constructor (private authService : AuthenticationService, private router : Router){super()}
    logout(){
        this.authService.logout()
        this.router.navigate(['/'])
    }
}