import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionDataService } from './session-data.service';
import {
  IListUsersRequest,
  IListUsersResponse,
  IUser,
  IUsersCreateRequest,
  IUserModifyRequest
} from '../models/User.model';
import { IUserType } from '../models/UserType.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listUsers(params: IListUsersRequest) {
    return this.http.get<IListUsersResponse>(environment.USER_LIST_SERVICE, {
      headers: this.getHeaders(),
      params: {...params},
    });
  }

  public createUser(payload: IUsersCreateRequest) {
    return this.http.post<IUser>(
      environment.USER_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }
  public modifyUser(payload: IUserModifyRequest) {
    return this.http.put(
      environment.USER_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteUser(payload: number) {
    return this.http.delete(
      environment.USER_CREATE_MODIFY_DELETE_SERVICE + '/' + payload, {
        headers: this.getHeaders(),
      }
    );
  }

  public getUserTypes() {
    return this.http.get<IUserType[]>(environment.USER_TYPE_LIST_SERVICE, {
      headers: this.getHeaders(),
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
