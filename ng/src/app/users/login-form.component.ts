import { Component } from "@angular/core";
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-el',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
    user: User = new User()

    constructor(private toastr: ToastrService, 
        private authService: AuthenticationService,
        private router : Router){}
        
    onSubmit(f: NgForm) {
        if (f.valid) {
            this.authService.login(this.user).subscribe(res => {
                this.toastr.success("Successfully logged in.")
                this.router.navigate(['/home'])
            }, error => {
                this.toastr.error('Unable to log in! Contact admin.')
            })

           
        } else {
            for (let c in f.controls) {
                f.controls[c].markAsDirty()
            }
        }
    }
}