import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatus = new Subject<Boolean>();
  constructor(private httpClient: HttpClient) { }

  public generateToken(loginDetails: any) {
    return this.httpClient.post(`${baseUrl}/generate-token`, loginDetails);
  }


  public getCurrentEmployee() {
    return this.httpClient.get(`${baseUrl}/current-user`);
  }

  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  public isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken() {
    return localStorage.getItem("token");
  }

  //Set User details
  public setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }

  }

  //get User role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
