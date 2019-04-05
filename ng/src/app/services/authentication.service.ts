import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import {map} from 'rxjs/operators';
//import { BEST_SELLERS } from '../models/books';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

constructor(private http : HttpClient){}

static isAuthenticated(): boolean{
  return localStorage.getItem('auth-token') !== null
}


  register(user: User): any {
  //todo 
   return this.http.post<User>('http://localhost:8080/api/users/register', user, httpHeaders)
  }

  login(user: User): any {
    //todo
  let res = this.http.post(`http://localhost:8080/api/users/login`, user, httpHeaders)

  return res.pipe(
    map(data => {
      if(data['token']){
        localStorage.setItem('auth-token', data['token'])
        return true //success login
      }else{
        return false //unable to login
      }
    })
  )
  }

  logout(): void{
    //todo
    localStorage.removeItem('auth-token')
  }

}