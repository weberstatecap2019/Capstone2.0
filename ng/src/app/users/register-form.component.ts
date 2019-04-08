import { Component } from "@angular/core";
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
    user: User = new User()

    constructor(private toastr: ToastrService, 
        private authService: AuthenticationService,
        private router : Router){}

    onSubmit(f: NgForm) {
        if (f.valid) {
           this.authService.register(this.user).subscribe(res => {
               this.toastr.success("Successfully registered.")
               this.router.navigate(['/home'])
           }, error => {
               this.toastr.error('Unable to register! Contact admin.')
           })
           
        } else {
            for (let c in f.controls) {
                f.controls[c].markAsDirty()
            }
            this.toastr.error("Validation errors. Please fix and try again!")
        }
    }
}