import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient: HttpClient) { }

  public addEmployeeOrSendOtp(user: any) {

    return this.httpClient.post(`${baseUrl}/user/addUser`, user);
  }

  public verifyOtp(otp: any, user: any) {
    return this.httpClient.post(`${baseUrl}/user/verify-otp`, { "otp": otp, "username": user });
  }


}
