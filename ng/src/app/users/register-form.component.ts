import { Component } from "@angular/core";
import { User } from '../models/user';


@Component({
    templateUrl: './register-form.component.html'
})

export class RegisterFormComponent{
    user: User = new User()
}