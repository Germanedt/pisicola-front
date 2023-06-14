import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  ICreateSowingRequest,
  IListSowingRequest,
  IListSowingResponse,
  IModifySowingRequest,
  ISowingHistoryRequest,
  ISowingHistoryResponse,
  ISowingStat,
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

  public closeSowing(payload: number) {
    return this.http.put(
      environment.SOWING_CREATE_MODIFY_DELETE_SERVICE +
        '/' +
        payload +
        '/close',
      {
        headers: this.getHeaders(),
      }
    );
  }

  public loadSowingStats(payload: number) {
    return this.http.get<ISowingStat[]>(
      environment.SOWING_LIST_STATS_SERVICE + '/' + payload + '/current',
      {
        headers: this.getHeaders(),
      }
    );
  }
  public loadSowingHistoryStats(payload: ISowingHistoryRequest) {
    return this.http.post<ISowingHistoryResponse>(
      environment.SOWING_LIST_HISTORY_STATS_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
        params: {
          page: 1,
          perPage: 100,
        },
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
