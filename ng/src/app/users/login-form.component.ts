import { Component } from "@angular/core";
import { User } from '../models/user';

@Component({
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent{
    user: User = new User()
}