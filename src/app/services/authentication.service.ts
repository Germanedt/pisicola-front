import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginRequest, ILoginResponse } from '../models/Authentication.model';
import { SessionDataService } from './session-data.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private sessionData: SessionDataService) {}

  public login(payload: ILoginRequest) {
    return this.http.post<ILoginResponse>(
      environment.AUTH_LOGIN_SERVICE,
      payload,
      { headers: this.getHeaders() }
    );
  }
  public logout() {
    let headers = this.getHeaders().append('Authorization', this.sessionData.tokenInfo.token);
    console.log(headers);
    return this.http.post(environment.AUTH_LOGOUT_SERVICE, {}, {
      headers: headers,
    });
  }
  private getHeaders() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
    });
  }
}
