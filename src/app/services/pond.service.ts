import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  ICreatePondRequest,
  IListPondRequest,
  IListPondResponse,
  IModifyPondRequest,
} from '../models/Pond.model';
@Injectable({
  providedIn: 'root',
})
export class PondService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listPonds(params: IListPondRequest, productiveUnitId: number) {
    return this.http.get<IListPondResponse>(
      environment.POND_LIST_SERVICE + '/' + productiveUnitId,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }

  public createPond(payload: ICreatePondRequest) {
    return this.http.post(
      environment.POND_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifyPond(payload: IModifyPondRequest) {
    return this.http.put(
      environment.POND_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deletePond(payload: number) {
    return this.http.delete(
      environment.POND_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
      {
        headers: this.getHeaders(),
      }
    );
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
