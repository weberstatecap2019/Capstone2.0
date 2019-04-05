import { AuthenticationService } from './services/authentication.service';

export class BaseComponent{
    get loggedIn(){
        return AuthenticationService.isAuthenticated()
    }

    get notLoggedIn(){
        return !this.loggedIn
    }
}