import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionDataService } from './session-data.service';
import {
  IListUsersRequest,
  IListUsersResponse,
  IUser,
  IUsersCreateRequest,
} from '../models/User.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listUsers(params: IListUsersRequest) {
    return this.http.get<IListUsersResponse>(environment.USERS_LIST_SERVICE, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createUser(payload: IUsersCreateRequest) {
    return this.http.post(environment.USERS_CREATE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public getUserById(payload: number) {
    return this.http.get<IUser>('', {
      headers: this.getHeaders(),
      params: {
        idUser: payload,
      },
    });
  }

  private getHeaders() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      Authorization: this.sessionData.tokenInfo.token,
    });
  }
}
