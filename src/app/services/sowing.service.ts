import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  ICreateSowingRequest,
  IListSowingRequest,
  IListSowingResponse,
  IModifySowingRequest,
} from '../models/Sowing.model';
@Injectable({
  providedIn: 'root',
})
export class SowingService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listSowings(params: IListSowingRequest, productiveUnitId: number) {
    return this.http.get<IListSowingResponse>(
      environment.SOWING_LIST_SERVICE + '/' + productiveUnitId,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }

  public createSowing(payload: ICreateSowingRequest) {
    return this.http.post(
      environment.SOWING_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifySowing(payload: IModifySowingRequest) {
    return this.http.put(
      environment.SOWING_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteSowing(payload: number) {
    return this.http.delete(
      environment.SOWING_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
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
